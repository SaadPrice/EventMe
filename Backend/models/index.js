const sequelize = require('../config/database');
const User = require('./user');
const Event = require('./event');
const Ticket = require('./ticket');
const SavedEvent = require('./savedEvent');

User.hasMany(Event);
Event.belongsTo(User);

User.hasMany(Ticket);
Ticket.belongsTo(User);

Event.hasMany(Ticket);
Ticket.belongsTo(Event);

User.belongsToMany(Event, { through: SavedEvent, as: 'SavedEvents' });
Event.belongsToMany(User, { through: SavedEvent });

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

module.exports = { User, Event, Ticket, SavedEvent };


