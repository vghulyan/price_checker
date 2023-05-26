import React, { useState } from "react";
import axios from "axios";
import ResetPassword from "../components/ResetPassword";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [resetPasswordModalOpen, setResetPasswordModalOpen] = useState(false);
  //const [latestPrice, setLatestPrice] = useState("");
  //const [latestTimestamp, setLatestTimestamp] = useState("");

  const handleUserName = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    console.log("username: ", username, " - password: ", password);
    e.preventDefault();
    try {
      const response = await axios.post("/login", { username, password });
      console.log("response: ", response);
      // Handle successful login
    } catch (error) {
      // Handle login error
    }
  };

  const handleResetPassword = () => {
    setResetPasswordModalOpen(true);
  };

  const handleModalClose = () => {
    setResetPasswordModalOpen(false);
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" onChange={handleUserName} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" onChange={handlePassword} />
      </div>

      <div className="button-container">
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleResetPassword}>Reset Password</button>
      </div>

      {resetPasswordModalOpen && <ResetPassword onClose={handleModalClose} />}
    </div>
  );
};

export default Login;
