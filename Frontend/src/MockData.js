// src/mockData.js
export const concerts = [
    { id: 1, name: 'Concert 1', date: '2024-07-01', location: 'Location 1' },
    { id: 2, name: 'Concert 2', date: '2024-07-05', location: 'Location 2' },
    // Add more concerts
  ];
  
  export const festivals = [
    { id: 1, name: 'Festival 1', date: '2024-08-01', location: 'Location 1' },
    { id: 2, name: 'Festival 2', date: '2024-08-05', location: 'Location 2' },
    // Add more festivals
  ];
  
  export const tours = [
    { id: 1, name: 'Tour 1', date: '2024-09-01', location: 'Location 1' },
    { id: 2, name: 'Tour 2', date: '2024-09-05', location: 'Location 2' },
    // Add more tours
  ];
  
  export const mockProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    eventsAttended: ['Concert 1', 'Festival 1', 'Tour 1'],
  };
  
  export const tickets = [
    { id: 1, event: { title: 'Concert 1' }, quantity: 2 },
    { id: 2, event: { title: 'Festival 1' }, quantity: 4 },
    { id: 3, event: { title: 'Tour 1' }, quantity: 1 },
  ];
  