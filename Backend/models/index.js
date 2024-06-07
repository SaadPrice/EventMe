const sequelize = require('../config/database');
const User = require('./user');
const Event = require('./event');
const Ticket = require('./ticket');

User.hasMany(Event);
Event.belongsTo(User);

User.hasMany(Ticket);
Ticket.belongsTo(User);

Event.hasMany(Ticket);
Ticket.belongsTo(Event);

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

module.exports = { User, Event, Ticket };

