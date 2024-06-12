const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Event = sequelize.define('Event', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Event.belongsTo(User, { foreignKey: 'UserId' });

module.exports = Event;





