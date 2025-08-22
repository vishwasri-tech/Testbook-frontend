import React, { useState } from "react";
import "./SignupScreen.css";
import logo from "./assets/logo.png";
import { useNavigate } from "react-router-dom";

const SignupScreen = () => {
  const [fullName, setFullName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // No validations or backend integration
    // alert("Signup clicked! (Demo only, no backend integration)");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <div className="left-panel">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="right-panel">
        <h2 className="header">Sign up</h2>
        <form onSubmit={handleSignup}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

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

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Enter your Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit" className="signup-btn">
            Signup
          </button>
        </form>
        <p className="login-text">
          Already have an account?{" "}
          <span onClick={handleLogin}>Login here</span>
        </p>
      </div>
    </div>
  );
};

export default SignupScreen;
