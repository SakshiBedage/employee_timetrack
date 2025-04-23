import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clockIn, clockOut } from "../Redux/actions";

const ClockInOut = () => {
  const [localClockInTime, setLocalClockInTime] = useState(null);
  const [localClockOutTime, setLocalClockOutTime] = useState(null);

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.clock.currentUser);
  console.log("Clock state:", currentUser);

  const handleClockIn = () => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    const date = now.toLocaleDateString();

    setLocalClockInTime(now);
    setLocalClockOutTime(null);

    dispatch(clockIn(currentUser.name, date, formattedTime));
  };

  const handleClockOut = () => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    const date = now.toLocaleDateString();

    setLocalClockOutTime(now);

    const diff = (now - localClockInTime) / (1000 * 60 * 60);
    const totalHours = diff.toFixed(2);

    dispatch(clockOut(currentUser.name, date, formattedTime, totalHours));
  };

  const calculateHoursWorked = () => {
    if (localClockInTime && localClockOutTime) {
      const diff = (localClockOutTime - localClockInTime) / (1000 * 60 * 60);
      return diff.toFixed(2);
    }
    return null;
  };

  return (
    <div className="clock-container">
      <h2>Clock In / Clock Out</h2>

      <div className="buttons">
        <button
          onClick={handleClockIn}
          disabled={localClockInTime && !localClockOutTime}
        >
          Clock In
        </button>
        <button
          onClick={handleClockOut}
          disabled={!localClockInTime || localClockOutTime}
        >
          Clock Out
        </button>
      </div>

      <div className="info">
        {localClockInTime && (
          <p>🕐 Clocked In At: {localClockInTime.toLocaleTimeString()}</p>
        )}
        {localClockOutTime && (
          <p>🕔 Clocked Out At: {localClockOutTime.toLocaleTimeString()}</p>
        )}
        {calculateHoursWorked() && (
          <p>⏱️ Total Hours Worked: {calculateHoursWorked()} hrs</p>
        )}

        {!localClockInTime && <p>Status: Not Clocked In</p>}
        {localClockInTime && !localClockOutTime && <p>Status: Working...</p>}
        {localClockOutTime && <p>Status: Done for the day!</p>}
      </div>
    </div>
  );
};

export default ClockInOut;
