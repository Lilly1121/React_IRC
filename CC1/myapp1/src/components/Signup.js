// components/Signup.js
import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupMessage, setSignupMessage] = useState('');

  const handleSignup = () => {
    if (newUsername.trim() === '' || newPassword.trim() === '' || confirmPassword.trim() === '') {
      setSignupMessage('Please fill in all fields.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setSignupMessage('Passwords do not match. Please try again.');
      return;
    }

    // Add more sophisticated password strength validation logic here if needed

    console.log(`Signup - New Username: ${newUsername}, New Password: ${newPassword}`);
    setSignupMessage('Signup successful! Welcome.');
    // Add signup logic here
  };

  return (
    <div className="form-container">
      <form>
        <h2>Signup</h2>
        <label htmlFor="new-username">New Username:</label>
        <input
          type="text"
          id="new-username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          required
        />
        <label htmlFor="new-password">New Password:</label>
        <input
          type="password"
          id="new-password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
      <p className="signup-message">{signupMessage}</p>
    </div>
  );
};

export default Signup;
