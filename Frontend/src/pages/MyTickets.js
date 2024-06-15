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
        console.error('Error fetching tickets:', err);
      }
    };

    fetchTickets();
  }, []);

  return (
    <div>
      <h1>My Tickets</h1>
      {tickets.length > 0 ? (
        <ul>
          {tickets.map(ticket => (
            <li key={ticket.id}>
              <h2>{ticket.eventName}</h2>
              <p>Quantity: {ticket.quantity}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tickets found.</p>
      )}
    </div>
  );
};

export default MyTickets;


