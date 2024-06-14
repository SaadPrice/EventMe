// backend/models/tickets.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Event = require('./events');

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
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  eventId: {
    type: DataTypes.INTEGER,
    references: {
      model: Event,
      key: 'id'
    }
  }
});

// Define associations
Ticket.belongsTo(User, { foreignKey: 'userId' });
Ticket.belongsTo(Event, { foreignKey: 'eventId' });

module.exports = Ticket;


