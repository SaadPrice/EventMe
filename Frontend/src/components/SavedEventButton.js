// src/components/SavedEventButton.js

import React from 'react';
import axios from 'axios';

const SavedEventButton = ({ eventId }) => {
  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        return;
      }

      const res = await axios.post('/api/saved-events/save', { eventId }, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      console.log(res.data);
      // Optionally, you can show a success message to the user
      alert('Event saved successfully');
    } catch (err) {
      console.error(err);
      // Optionally, you can show an error message to the user
      alert('Failed to save event');
    }
  };

  return (
    <button className="save-button" onClick={handleSave}>Save Event</button>
  );
};

export default SavedEventButton;


