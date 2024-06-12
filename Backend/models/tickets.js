// backend/models/tickets.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the Sequelize model
const Ticket = sequelize.define('ticket', {
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  purchaseDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users', // Name of the related model
      key: 'id'
    }
  },
  eventId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Events', // Name of the related model
      key: 'id'
    }
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

// Export the model
module.exports = Ticket;

