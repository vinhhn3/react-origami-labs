import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/authContext/AuthContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);
  const { loginUser } = authContext;
  const navigate = useNavigate();

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    console.log(userName, password);
    loginUser({ username: userName, password: password });
    navigate("/profile");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        value={userName}
        onChange={handleUserNameChange}
        type="text"
        placeholder="Username"
      />
      <input
        onChange={handlePasswordChange}
        value={password}
        type="password"
        placeholder="Password"
      />
      <button onClick={handleRegister}>Login</button>
    </div>
  );
}

export default Login;
