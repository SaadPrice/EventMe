import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Godfrey',
      date: '2024-06-09T18:00:00',
      location: 'The Comedy Zone, Charlotte, NC',
    },
    {
      id: 2,
      title: 'Bossman Dlow',
      date: '2024-06-14T19:00:00',
      location: 'The Fillmore, Charlotte, NC',
    },
    {
      id: 3,
      title: 'Partynextdoor',
      date: '2024-07-25T19:00:00',
      location: 'The Fillmore, Charlotte, NC',
    },
  ]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/events', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setEvents(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Events</h1>
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

export default EventList;

