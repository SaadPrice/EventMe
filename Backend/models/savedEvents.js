const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SavedEvent = sequelize.define('savedEvent', {
  savedDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = SavedEvent;

  
