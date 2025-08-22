import React, { useState } from "react";
import "./LoginScreen.css";
import logo from "./assets/logo.png";
import { useNavigate } from "react-router-dom";

const ForgotScreen = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // No validations or backend integration
    // alert("Login clicked! (Demo only, no backend integration)");
  };

 

  const handleForgotPassword = () => {
    navigate("/login"); 
  };

  return (
    <div className="signup-container">
      <div className="left-panel">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="right-panel">
        <h2 className="header">Create New Password</h2>
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter your Email"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />

          <label>New Password</label>
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
           <label>Confirm Password</label>
          <input
            type="password"
            placeholder="ReEnter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="signup-btn"  onClick={handleForgotPassword}>
            Save Password
          </button>
        </form>
       
      </div>
    </div>
  );
};

export default ForgotScreen;
