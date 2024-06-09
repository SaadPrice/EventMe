require('dotenv').config(); // Load environment variables from .env file
const { Sequelize } = require('sequelize');

console.log('DATABASE_URL:', process.env.DATABASE_URL); // Add this line for debugging

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false, // Set to true if you want to see the SQL queries being run
});

module.exports = sequelize;

