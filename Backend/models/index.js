const sequelize = require('../config/database');
const User = require('./user');  // Matches user.js
const Event = require('./events');  // Matches events.js
const Ticket = require('./tickets');  // Matches tickets.js
const SavedEvent = require('./savedEvents');  // Matches savedEvents.js

// Define associations
User.hasMany(Event, { foreignKey: 'UserId' });
Event.belongsTo(User, { foreignKey: 'UserId' });

User.hasMany(Ticket, { foreignKey: 'UserId' });
Ticket.belongsTo(User, { foreignKey: 'UserId' });

Event.hasMany(Ticket, { foreignKey: 'EventId' });
Ticket.belongsTo(Event, { foreignKey: 'EventId' });

User.belongsToMany(Event, { through: SavedEvent, as: 'SavedEvents' });
Event.belongsToMany(User, { through: SavedEvent, as: 'UsersSaved' });

module.exports = {
  User,
  Event,
  Ticket,
  SavedEvent,
  sequelize
};
