import React, { useState } from 'react';
import Api from './Api'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';

const MyRegister = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Api.register(formData);
      console.log('User registered successfully:', response.data);
      navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      console.error('Error registering user:', error);
      setError('Failed to register user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Register</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default MyRegister;
 



