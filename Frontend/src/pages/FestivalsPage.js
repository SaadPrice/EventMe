import React from 'react';

import { festivals } from '../MockData';
import SavedEventButton from '../components/SavedEventButton';

const FestivalsPage = () => {
  return (
    <div className="festivals-page">
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

