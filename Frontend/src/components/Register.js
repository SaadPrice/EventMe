// src/components/Register.js
import React, { useState } from 'react';
import api from '../api';

const Register = () => {
  const [message, setMessage] = useState('');

  const handleRegister = async (username, email, password) => {
    try {
      const userData = { username, email, password };
      const response = await api.register(userData);
      setMessage('Registration successful for ' + username + '!');
    } catch (error) {
      setMessage('Registration failed for ' + username + '. Please try again.');
    }
  };

  const users = [
    { username: 'Red Peppercorn', email: 'red@gmail.com', password: 'Peppercorn3' },
    { username: 'Chalky White', email: 'boardwalk@gmail.com', password: 'Boardwalkempire2' },
    { username: 'Blu Notes', email: 'jazz@gmail.com', password: 'Saxophone1' },
  ];

  return (
    <div>
      <h2>Register</h2>
      {users.map((user, index) => (
        <form key={index} onSubmit={(e) => { e.preventDefault(); handleRegister(user.username, user.email, user.password); }}>
          <div>
            <label>Username:</label>
            <input type="text" value={user.username} readOnly />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={user.email} readOnly />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={user.password} readOnly />
          </div>
          <button type="submit">Register {user.username}</button>
        </form>
      ))}
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;

