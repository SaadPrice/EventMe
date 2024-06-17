const { User, Event, Tickets, SavedEvents, sequelize } = require('./models');
const bcrypt = require('bcryptjs');

const users = [
  { id: 1, username: 'Red Peppercorn', email: 'red@gmail.com', password: bcrypt.hashSync('Peppercorn3', 10) },
  { id: 2, username: 'Chalky White', email: 'boardwalk@gmail.com', password: bcrypt.hashSync('Boardwalkempire2', 10) },
  { id: 3, username: 'Blu Notes', email: 'jazz@gmail.com', password: bcrypt.hashSync('Saxophone1', 10) },
];

const events = [
  { id: 1, title: 'Godfrey', date: new Date('2024-06-09T18:00:00'), location: 'The Comedy Zone, Charlotte, NC', type: 'concert', UserId: 1 },
  { id: 2, title: 'Bossman Dlow', date: new Date('2024-06-14T19:00:00'), location: 'The Fillmore, Charlotte, NC', type: 'concert', UserId: 2 },
  { id: 3, title: 'Partynextdoor', date: new Date('2024-07-25T19:00:00'), location: 'The Fillmore, Charlotte, NC', type: 'concert', UserId: 3 },
];

const tickets = [
  { id: 1, status: 'purchased', purchaseDate: new Date('2024-06-01'), quantity: 1, userId: 1, eventId: 1 },
  { id: 2, status: 'reserved', purchaseDate: new Date('2024-06-05'), quantity: 2, userId: 2, eventId: 2 },
  { id: 3, status: 'purchased', purchaseDate: new Date('2024-06-10'), quantity: 3, userId: 3, eventId: 3 },
  { id: 4, status: 'purchased', purchaseDate: new Date('2024-07-01'), quantity: 1, userId: 1, eventId: 3 },
  { id: 5, status: 'reserved', purchaseDate: new Date('2024-07-05'), quantity: 2, userId: 2, eventId: 1 },
];

const savedEvents = [
  { id: 1, savedDate: new Date('2024-06-02'), UserId: 1, EventId: 2 },
  { id: 2, savedDate: new Date('2024-06-06'), UserId: 2, EventId: 3 },
  { id: 3, savedDate: new Date('2024-06-12'), UserId: 3, EventId: 1 },
  { id: 4, savedDate: new Date('2024-07-01'), UserId: 1, EventId: 3 },
  { id: 5, savedDate: new Date('2024-07-05'), UserId: 2, EventId: 1 },
];

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synced successfully.');

    await User.bulkCreate(users);
    console.log('Users seeded successfully.');

    await Event.bulkCreate(events);
    console.log('Events seeded successfully.');

    await Tickets.bulkCreate(tickets);
    console.log('Tickets seeded successfully.');

    await SavedEvents.bulkCreate(savedEvents);
    console.log('Saved events seeded successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

seedDatabase();
