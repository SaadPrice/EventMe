// src/pages/FestivalsPage.js
import React from 'react';
import { festivals } from '../mockData';
import SavedEventButton from '../components/SavedEventButton';

const FestivalsPage = () => {
  return (
    <div>
      <h1>Festivals</h1>
      <ul>
        {festivals.map(festival => (
          <li key={festival.id}>
            {festival.name} - {festival.date} - {festival.location}
            <SavedEventButton eventId={festival.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FestivalsPage;
