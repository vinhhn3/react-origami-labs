import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/authContext/AuthContext";

function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);
  const { registerUser } = authContext;
  const navigate = useNavigate();

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async () => {
    try {
      await registerUser({ username: userName, password: password });
      navigate("/");
    } catch (error) {
      alert("Register error");
    }
  };

  return (
    <div>
      <h1>Register Page</h1>
      <div className="form-control">
        <input
          value={userName}
          onChange={handleUserNameChange}
          type="text"
          placeholder="Username"
        />
      </div>
      <div className="form-control">
        <input
          onChange={handlePasswordChange}
          value={password}
          type="password"
          placeholder="Password"
        />
      </div>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
