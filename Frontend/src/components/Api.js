import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

axios.defaults.baseURL = API_BASE_URL;

const api = {
  // User Authentication
  register: (userData) => axios.post('/auth/register', userData),
  login: (credentials) => axios.post('/auth/login', credentials),
  getUserProfile: (token) => axios.get('/auth/profile', {
    headers: { 'Authorization': `Bearer ${token}` }
  }),
  deleteUser: (token) => axios.delete('/auth/delete', {
    headers: { 'Authorization': `Bearer ${token}` }
  }),
};

export default api;





