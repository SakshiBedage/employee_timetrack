import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Login.scss";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./Redux/actions";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.clock.currentUser);
  const loginError = useSelector((state) => state.clock.loginError);

  const onSubmit = () => {
    dispatch(login({ name, password }));
  };

  useEffect(() => {
    console.log("Updated currentUser from Redux:", currentUser);
    if (currentUser) {
      if (currentUser.role === "Employee") navigate("/employee");
      else if (currentUser.role === "Supervisor") navigate("/supervisor");
      else if (currentUser.role === "HR") navigate("/hr");
    }
  }, [currentUser, navigate]);

  return (
    <div className="login-container">
      <h1>Login</h1>

      <h4>Name</h4>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h4>Password</h4>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />
      <br />
      <button onClick={onSubmit}>Submit</button>

      {loginError && <p style={{ color: "red" }}>{loginError}</p>}
    </div>
  );
};

export default Login;
