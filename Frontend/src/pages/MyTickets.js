// src/pages/MyTickets.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/tickets/my-tickets', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setTickets(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div>
      {tickets.map((ticket) => (
        <div key={ticket.id}>
          <h2>{ticket.Event.title}</h2>
          <p>Quantity: {ticket.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default MyTickets;

