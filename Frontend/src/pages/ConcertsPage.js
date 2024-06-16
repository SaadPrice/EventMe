import React, { useEffect, useState } from 'react';
import Api from '../components/Api'; // Ensure the correct path to Api

const ConcertsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await Api.getEvents(token);
        const concerts = response.data.filter(event => event.type === 'Concert'); // Adjust according to your data structure
        setEvents(concerts);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Concerts</h1>
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.title}</h2>
          <p>{new Date(event.date).toLocaleDateString()} {new Date(event.date).toLocaleTimeString()}</p>
          <p>{event.location}</p>
        </div>
      ))}
    </div>
  );
};

export default ConcertsPage;
