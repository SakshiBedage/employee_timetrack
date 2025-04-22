import { useState } from "react";
import ClockInOut from "./ClockInOut";
import Timesheet from "./Timesheet";
import "../styles/EmployeeDashboard.scss";
import { useSelector } from "react-redux";

const EmployeeDashboard = () => {
  const [activeTab, setActiveTab] = useState("");

  const clockState = useSelector((state) => state.clock);

  console.log(clockState);
  const renderComponent = () => {
    if (activeTab === "clock") return <ClockInOut />;
    if (activeTab === "timesheet") return <Timesheet />;
    return <h3>Please select an option above </h3>;
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome, {clockState.currentUser?.name} !!!</h1>

      <div className="button-group">
        <button onClick={() => setActiveTab("clock")}>
          Clock In / Clock Out
        </button>
        <button onClick={() => setActiveTab("timesheet")}>
          View Timesheet
        </button>
      </div>

      <div className="component-section">{renderComponent()}</div>
    </div>
  );
};

export default EmployeeDashboard;
