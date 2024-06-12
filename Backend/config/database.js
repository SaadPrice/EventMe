require('dotenv').config(); // Load environment variables from .env file
const { Sequelize } = require('sequelize');

console.log('DATABASE_URL:', process.env.DATABASE_URL); // Debug line to check if the environment variable is loaded correctly

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false, // Set to true if you want to see the SQL queries being run
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;


