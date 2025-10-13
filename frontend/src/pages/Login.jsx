import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LogIn } from "lucide-react";
import StyledInput from "../components/StyledInput";
import ThemeToggle from "../components/ThemeToggle";

const Login = () => {
  const [formData, setFormData] = useState({ emailOrUsername: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  // Helper function to validate email format
  const isEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  // Helper function to validate username format
  const isValidUsername = (input) => {
    // Username should be at least 3 characters, alphanumeric and underscores
    const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
    return usernameRegex.test(input);
  };

  const validateInput = () => {
    const { emailOrUsername, password } = formData;
    
    if (!emailOrUsername.trim()) {
      setError("Email or username is required");
      return false;
    }
    
    if (!password) {
      setError("Password is required");
      return false;
    }
    
    // Check if input is neither valid email nor valid username
    if (!isEmail(emailOrUsername) && !isValidUsername(emailOrUsername)) {
      setError("Please enter a valid email address or username (3+ characters, letters, numbers, and underscores only)");
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateInput()) {
      return;
    }
    
    setLoading(true);
    try {
      await login(formData.emailOrUsername, formData.password);
      navigate("/todos");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-theme-toggle">
        <ThemeToggle />
      </div>
      <div className="auth-card">
        <div className="auth-header">
          <LogIn size={40} />
          <h1>Welcome Back</h1>
          <p>Login to manage your tasks</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <StyledInput
            type="text"
            name="emailOrUsername"
            value={formData.emailOrUsername}
            onChange={handleChange}
            required
            label="Email or Username"
            placeholder="Enter your email or username"
          />

          <StyledInput
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            label="Password"
            placeholder="Enter your password"
            isPassword={true}
          />

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
