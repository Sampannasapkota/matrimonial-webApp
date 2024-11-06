import React from "react";
import "./Login.css"; // Import the CSS file for styling
import logo from '../assets/logo.png';




const Login = () => {
  return (
    <div className="login-wrapper">
      {/* Logo Section */}
      <div className="logo-container">
        <img
          src={logo} // Replace this URL with your logo URL
          alt="Logo"
          className="login-logo"
        />
      </div>

      {/* Login Form Container */}
      <div className="login-container">
        
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="login-button">Login</button>
          <div className="forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
