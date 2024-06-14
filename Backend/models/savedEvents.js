const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Event = require('./events');

const SavedEvent = sequelize.define('SavedEvent', {
  savedDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

SavedEvent.belongsTo(User, { foreignKey: 'UserId' });
SavedEvent.belongsTo(Event, { foreignKey: 'EventId' });

module.exports = SavedEvent;


  
