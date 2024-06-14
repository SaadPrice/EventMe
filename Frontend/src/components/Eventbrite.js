import React, { useEffect, useState } from 'react';
import api from './Api'; // Adjusted import path

const Eventbrite = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await api.fetchEventbriteEvents(token, 'music', 'Charlotte, NC');
        setEvents(response.data.events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Eventbrite Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h2>{event.name.text}</h2>
            <p>
              {new Date(event.start.local).toLocaleDateString()}{' '}
              {new Date(event.start.local).toLocaleTimeString()}
            </p>
            <p>{event.venue.address.localized_address_display}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Eventbrite;


