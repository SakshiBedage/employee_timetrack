import { useSelector } from "react-redux";
import "../styles/Timesheet.scss";

const Timesheet = () => {
  const currentUser = useSelector((state) => state.clock.currentUser);

  if (!currentUser) return <p>No user logged in.</p>;

  const timesheet = currentUser.timesheet;

  return (
    <div className="timesheet-container">
      <h2>Timesheet</h2>
      {timesheet.length === 0 ? (
        <p>No entries yet.</p>
      ) : (
        <table className="timesheet-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Clock In</th>
              <th>Clock Out</th>
              <th>Total Hours</th>
            </tr>
          </thead>
          <tbody>
            {timesheet.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.clockInTime}</td>
                <td>{entry.clockOutTime}</td>
                <td>{entry.totalHours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Timesheet;
