import React, { useEffect, useState } from 'react';
import api from '../api';

const EventbriteEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEventbriteEvents = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await api.fetchEventbriteEvents(token, 'music', 'Charlotte, NC');
        setEvents(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEventbriteEvents();
  }, []);

  return (
    <div>
      <h1>Eventbrite Events</h1>
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.name.text}</h2>
          <p>{new Date(event.start.local).toLocaleDateString()} {new Date(event.start.local).toLocaleTimeString()}</p>
          <p>{event.venue.address.localized_address_display}</p>
        </div>
      ))}
    </div>
  );
};

export default EventbriteEvents;
