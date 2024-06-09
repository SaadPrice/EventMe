
require('dotenv').config(); // Load environment variables from .env file
const { sequelize, User, Event } = require('./models');
const bcrypt = require('bcryptjs');

const init = async () => {
  try {
    await sequelize.sync({ force: true }); // This will recreate the tables
    console.log('Database & tables created!');

    const users = [
      {
        username: 'Red Peppercorn',
        email: 'red@gmail.com',
        password: await bcrypt.hash('Peppercorn3', 10),
      },
      {
        username: 'Chalky White',
        email: 'boardwalk@gmail.com',
        password: await bcrypt.hash('Boardwalkempire2', 10),
      },
      {
        username: 'Blu Notes',
        email: 'jazz@gmail.com',
        password: await bcrypt.hash('Saxophone1', 10),
      },
    ];

    const createdUsers = await Promise.all(users.map(user => User.create(user)));

    const events = [
      {
        title: 'Godfrey',
        date: new Date('2024-06-09T18:00:00'),
        location: 'The Comedy Zone, Charlotte, NC',
        UserId: createdUsers[0].id,  // Assign event to the first user
      },
      {
        title: 'Bossman Dlow',
        date: new Date('2024-06-14T19:00:00'),
        location: 'The Fillmore, Charlotte, NC',
        UserId: createdUsers[1].id,  // Assign event to the second user
      },
      {
        title: 'Partynextdoor',
        date: new Date('2024-07-25T19:00:00'),
        location: 'The Fillmore, Charlotte, NC',
        UserId: createdUsers[2].id,  // Assign event to the third user
      },
    ];

    await Promise.all(events.map(event => Event.create(event)));

    console.log('Users and Events inserted successfully!');
  } catch (error) {
    console.error('Error creating database & tables:', error);
  }
};

init();
