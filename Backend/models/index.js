const sequelize = require('../config/database');
const User = require('./user');
const Event = require('./events');
const Ticket = require('./tickets');
const SavedEvent = require('./savedEvents');

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

