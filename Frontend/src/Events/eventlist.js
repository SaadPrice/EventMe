import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events');
        setEvents(response.data.events);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      {events.map(event => (
        <div key={event.id}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>{new Date(event.date).toLocaleDateString()}</p>
          <p>{event.location}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;
