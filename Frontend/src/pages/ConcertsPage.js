// src/pages/ConcertsPage.js
import React from 'react';
import { concerts } from '../MockData';
import SavedEventButton from '../components/SavedEventButton';

const ConcertsPage = () => {
  return (
    <div>
      <h1>Concerts</h1>
      <ul>
        {concerts.map(concert => (
          <li key={concert.id}>
            {concert.name} - {concert.date} - {concert.location}
            <SavedEventButton eventId={concert.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConcertsPage;
