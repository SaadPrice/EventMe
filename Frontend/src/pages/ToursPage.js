// src/pages/ToursPage.js
import React from 'react';
import { tours } from '../MockData';
import SavedEventButton from '../components/SavedEventButton';

const ToursPage = () => {
  return (
    <div>
      <h1>Tours</h1>
      <ul>
        {tours.map(tour => (
          <li key={tour.id}>
            {tour.name} - {tour.date} - {tour.location}
            <SavedEventButton eventId={tour.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToursPage;
