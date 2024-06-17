import React, { useEffect, useState } from 'react';
import Api from './Api';

const UserProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await Api.getUserProfile(token);
          setProfile(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching profile:', error);
          setError('Failed to fetch profile');
          setLoading(false);
        }
      } else {
        setError('No token found');
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

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
    </div>
  );
};

export default UserProfile;







