// components/Login.js
import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = () => {
    if (loginUsername.trim() === '' || loginPassword.trim() === '') {
      setLoginMessage('Please enter both username and password.');
      return;
    }

    // Replace these values with your actual username and password
    const validUsername = 'name';
    const validPassword = 'pass';

    if (loginUsername === validUsername && loginPassword === validPassword) {
      setLoginMessage('Welcome! Login successful.');
      // Add additional logic for successful login
    } else {
      setLoginMessage('Invalid username or password. Please try again.');
      // Add additional logic for unsuccessful login
    }
  };

  return (
    <div className="form-container">
      <form>
        <h2>Login</h2>
        <label htmlFor="login-username">Username:</label>
        <input
          type="text"
          id="login-username"
          value={loginUsername}
          onChange={(e) => setLoginUsername(e.target.value)}
          required
        />
        <label htmlFor="login-password">Password:</label>
        <input
          type="password"
          id="login-password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          required
        />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <p className="login-message">{loginMessage}</p>
    </div>
  );
};

export default Login;
