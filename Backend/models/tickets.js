const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Ticket = sequelize.define('Ticket', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Ticket;
