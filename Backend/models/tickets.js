const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Ticket = sequelize.define('ticket', {
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  purchaseDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Ticket;
