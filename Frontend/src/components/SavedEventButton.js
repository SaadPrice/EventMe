import React from 'react';
import axios from 'axios';

const SaveEventButton = ({ eventId }) => {
  const handleSaveEvent = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('/api/saved-events/save', { eventId }, {
        headers: { 'Authorization': token }
      });
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button onClick={handleSaveEvent}>Save Event</button>
  );
};

export default SaveEventButton;
