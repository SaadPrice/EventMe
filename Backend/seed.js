const { User, Event, Ticket, SavedEvent, sequelize } = require('./models');
const bcrypt = require('bcryptjs');

const users = [
  {
    id: 1,
    username: 'Red Peppercorn',
    email: 'red@gmail.com',
    password: bcrypt.hashSync('Peppercorn3', 10),
  },
  {
    id: 2,
    username: 'Chalky White',
    email: 'boardwalk@gmail.com',
    password: bcrypt.hashSync('Boardwalkempire2', 10),
  },
  {
    id: 3,
    username: 'Blu Notes',
    email: 'jazz@gmail.com',
    password: bcrypt.hashSync('Saxophone1', 10),
  },
];

const events = [
  {
    id: 1,
    title: 'Godfrey',
    date: new Date('2024-06-09T18:00:00'),
    location: 'The Comedy Zone, Charlotte, NC',
    UserId: 1,
  },
  {
    id: 2,
    title: 'Bossman Dlow',
    date: new Date('2024-06-14T19:00:00'),
    location: 'The Fillmore, Charlotte, NC',
    UserId: 2,
  },
  {
    id: 3,
    title: 'Partynextdoor',
    date: new Date('2024-07-25T19:00:00'),
    location: 'The Fillmore, Charlotte, NC',
    UserId: 3,
  },
];

const tickets = [
  {
    id: 1,
    userId: 1,
    eventId: 1,
    status: 'purchased',
    purchaseDate: new Date('2024-06-01'),
  },
  {
    id: 2,
    userId: 2,
    eventId: 2,
    status: 'reserved',
    purchaseDate: new Date('2024-06-05'),
  },
  {
    id: 3,
    userId: 3,
    eventId: 3,
    status: 'purchased',
    purchaseDate: new Date('2024-06-10'),
  },
  {
    id: 4,
    userId: 1,
    eventId: 3,
    status: 'purchased',
    purchaseDate: new Date('2024-07-01'),
  },
  {
    id: 5,
    userId: 2,
    eventId: 1,
    status: 'reserved',
    purchaseDate: new Date('2024-07-05'),
  },
];

const savedEvents = [
  {
    id: 1,
    userId: 1,
    eventId: 2,
    savedDate: new Date('2024-06-02'),
  },
  {
    id: 2,
    userId: 2,
    eventId: 3,
    savedDate: new Date('2024-06-06'),
  },
  {
    id: 3,
    userId: 3,
    eventId: 1,
    savedDate: new Date('2024-06-12'),
  },
  {
    id: 4,
    userId: 1,
    eventId: 3,
    savedDate: new Date('2024-07-01'),
  },
  {
    id: 5,
    userId: 2,
    eventId: 1,
    savedDate: new Date('2024-07-05'),
  },
];

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    await User.bulkCreate(users);
    await Event.bulkCreate(events);
    await Ticket.bulkCreate(tickets);
    await SavedEvent.bulkCreate(savedEvents);
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

seedDatabase();

