// Login.js
import React, { useState } from 'react';
import '../../../styles/sections/LoginForm.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validations
    if (!username || !password) {
      setErrorMessage('Please enter both username and password.');
      return;
    }

    // Add login logic here (for demonstration, we'll just set isLoggedIn to true)
    setIsLoggedIn(true);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        <button type="button" className="forgot-password-button">
          Forgot Password
        </button>
      </form>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {isLoggedIn && <div className="success-message">Logged in successfully!</div>}
    </div>
  );
}

export default Login;
