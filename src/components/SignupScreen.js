import React, { useState } from "react";
import "./SignupScreen.css";
import logo from "./assets/logo.png";
import { useNavigate } from "react-router-dom";

const SignupScreen = () => {
  const [fullName, setFullName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // ---------------- VALIDATIONS ----------------
    if (fullName.trim().length < 5) {
      return setError("Full name must be at least 5 characters long.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(emailOrPhone) && !phoneRegex.test(emailOrPhone)) {
      return setError("Enter a valid email address or 10-digit phone number.");
    }

    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{5,}$/;
    if (!passwordRegex.test(password)) {
      return setError(
        "Password must be at least 5 characters and contain a special character."
      );
    }

    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }

    // ---------------- API CALL ----------------
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, emailOrPhone, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed");
      } else {
        setSuccess("✅ Registered successfully!");
        // Optional: redirect after 2 seconds
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (err) {
      console.error("❌ Fetch error:", err);
      setError("Error connecting to server");
    } finally {
      setLoading(false);
    }
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

          <button type="submit" className="signup-btn" disabled={loading}>
            {loading ? "Signing up..." : "Signup"}
          </button>
        </form>

        {error && <p className="error-text">{error}</p>}
        {success && <p className="success-text">{success}</p>}

        <p className="login-text">
          Already have an account?{" "}
          <span onClick={handleLogin}>Login here</span>
        </p>
      </div>
    </div>
  );
};

export default SignupScreen;
