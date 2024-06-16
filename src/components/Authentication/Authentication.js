import React, { useState } from 'react';
import './Authentication.css';

const Authentication = ({ onLogin }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Check user credentials
    if (userId === 'raahi' && password === 'patel') {
      onLogin('branch1');
    } else if (userId === 'dhruv' && password === 'patel') {
      onLogin('branch2');
    } else if (userId === 'veer' && password === 'patel') {
      onLogin('headquarters');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="authentication-container">
      <h1>PATEL'S DHABA</h1>
      <h2>LOGIN PAGE</h2>
      <div className="form-container">
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Authentication;
