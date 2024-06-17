'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Event.associate = function(models) {
    Event.hasMany(models.Tickets, { foreignKey: 'eventId' });
    Event.hasMany(models.SavedEvents, { foreignKey: 'EventId' });
    Event.belongsTo(models.User, { foreignKey: 'UserId' });
  };

  return Event;
};







