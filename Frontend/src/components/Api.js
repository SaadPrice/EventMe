// src/components/Api.js
import axios from 'axios';

console.log("Api.js loaded")

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

axios.defaults.baseURL = API_BASE_URL;

const api = {
  // User Authentication
  register: (userData) => axios.post('/auth/register', userData),
  login: (credentials) => axios.post('/auth/login', credentials),
  deleteUser: (token) => axios.delete('/auth/delete', {
    headers: { 'Authorization': `Bearer ${token}` }
  }),

  // Events
  createEvent: (token, eventData) => axios.post('/events', eventData, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }),
  getEvents: (token) => axios.get('/events', {
    headers: { 'Authorization': `Bearer ${token}` }
  }),
  updateEvent: (token, eventId, updatedData) => axios.put(`/events/${eventId}`, updatedData, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }),
  deleteEvent: (token, eventId) => axios.delete(`/events/${eventId}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  }),

  // Eventbrite
  fetchEventbriteEvents: (token, query, location) => axios.get('/events/eventbrite', {
    headers: { 'Authorization': `Bearer ${token}` },
    params: { q: query, 'location.address': location }
  }),

  // Saved Events
  saveEvent: (token, eventId) => axios.post('/saved-events/save', { eventId }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` }
  }),
  getUserSavedEvents: (token) => axios.get('/saved-events/my-saved-events', {
    headers: { 'Authorization': `Bearer ${token}` }
  }),
  deleteSavedEvent: (token, savedEventId) => axios.delete(`/saved-events/delete-saved/${savedEventId}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  }),

  // Tickets
  buyTicket: (token, eventId, quantity) => axios.post('/tickets/buy', { eventId, quantity }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` }
  }),
  getUserTickets: (token) => axios.get('/tickets/my-tickets', {
    headers: { 'Authorization': `Bearer ${token}` }
  }),
  deleteTicket: (token, ticketId) => axios.delete(`/tickets/delete/${ticketId}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  })
};

export default api;



