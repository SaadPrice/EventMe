const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Event = sequelize.define('event', {
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
});

module.exports = Event;




