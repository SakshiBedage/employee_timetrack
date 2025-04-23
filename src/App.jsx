import "./styles/main.scss";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import EmployeeDashboard from "./Dashboard/EmployeeDashboard";
import SupervisorDashboard from "./Dashboard/SupervisorDashboard";
import HRDashboard from "./Dashboard/HRDashboard";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/employee",
    element: <EmployeeDashboard />,
  },
  {
    path: "/supervisor",
    element: <SupervisorDashboard />,
  },
  {
    path: "/hr",
    element: <HRDashboard />,
  },
]);
export default App;
