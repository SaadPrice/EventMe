import React, { useState } from 'react';
import axios from 'axios';

const BuyTicketForm = ({ eventId }) => {
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('/api/tickets/buy', { eventId, quantity }, {
        headers: { 'Authorization': token }
      });
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" />
      <button type="submit">Buy Ticket</button>
    </form>
  );
};

export default BuyTicketForm;
