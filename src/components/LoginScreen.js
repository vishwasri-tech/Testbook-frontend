import React, { useState } from "react";
import "./LoginScreen.css";
import logo from "./assets/logo.png";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // No validations or backend integration
    // alert("Login clicked! (Demo only, no backend integration)");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password"); // Navigate to forgot password page
  };

  return (
    <div className="signup-container">
      <div className="left-panel">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="right-panel">
        <h2 className="header">Login</h2>
        <form onSubmit={handleLogin}>
          <label>Email/Phone</label>
          <input
            type="text"
            placeholder="Enter your Email/Phone"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Forgot Password link */}
          <p
            className="forgot-password-text"
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </p>

          <button type="submit" className="signup-btn">
            Login
          </button>
        </form>
        <p className="login-text">
          Don't have an account?{" "}
          <span onClick={handleSignUp}>SignUp here</span>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
