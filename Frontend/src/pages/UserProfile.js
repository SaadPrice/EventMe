// src/components/UserProfile.js
import React from 'react';

const mockProfile = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  eventsAttended: ['Concert 1', 'Festival 1', 'Tour 1'],
};

const UserProfile = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {mockProfile.name}</p>
      <p>Email: {mockProfile.email}</p>
      <h2>Events Attended</h2>
      <ul>
        {mockProfile.eventsAttended.map((event, index) => (
          <li key={index}>{event}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;

