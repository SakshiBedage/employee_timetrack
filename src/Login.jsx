import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = () => {
    console.log("email", email, " password ", password);
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Login</h1>
      <h4>Email</h4>
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <h4>Passowrd</h4>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};
export default Login;
