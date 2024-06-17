import React, { useState } from 'react';
import Api from './Api'; // Ensure the path to Api.js is correct
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Api.login(formData);
      console.log('User logged in successfully:', response.data);
      localStorage.setItem('token', response.data.token);
      navigate('/profile'); // Redirect to profile page after successful login
    } catch (error) {
      console.error('Error logging in user:', error);
      setError('Failed to login');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Sign In</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default SignIn;




