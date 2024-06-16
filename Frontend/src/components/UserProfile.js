import React, { useEffect, useState } from 'react';
import Api from './Api';

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await Api.getUserProfile(token);
          setProfile(response.data);
        } catch (error) {
          console.error('Error fetching profile:', error);
          setError('Failed to fetch profile');
        }
      }
    };

    fetchProfile();
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {profile.username}</p>
      <p>Email: {profile.email}</p>
      <h2>Events Attended</h2>
      <ul>
        {profile.Events.map((event, index) => (
          <li key={index}>{event.title}</li>
        ))}
      </ul>
      {error && <p>{error}</p>}
    </div>
  );
};

export default UserProfile;



