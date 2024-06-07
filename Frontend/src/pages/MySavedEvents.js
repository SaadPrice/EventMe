import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MySavedEvents = () => {
  const [savedEvents, setSavedEvents] = useState([]);

  useEffect(() => {
    const fetchSavedEvents = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/saved-events/my-saved-events', {
          headers: { 'Authorization': token }
        });
        setSavedEvents(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSavedEvents();
  }, []);

  return (
    <div>
      {savedEvents.map((savedEvent) => (
        <div key={savedEvent.id}>
          <h2>{savedEvent.Event.title}</h2>
          <p>{savedEvent.Event.date}</p>
          <p>{savedEvent.Event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default MySavedEvents;
