import React from 'react';
import BuyTicketForm from '../components/BuyTicketForm';

const EventDetails = ({ match }) => {
  const eventId = match.params.id; // Assuming you pass the event ID via URL params

  return (
    <div>
      <h1>Event Details</h1>
      {/* Display event details here */}
      <BuyTicketForm eventId={eventId} />
    </div>
  );
};

export default EventDetails;
