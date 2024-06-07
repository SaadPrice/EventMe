const sequelize = require('../config/database');
const User = require('./user');
const Event = require('./event');

User.hasMany(Event);
Event.belongsTo(User);

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

module.exports = { User, Event };
