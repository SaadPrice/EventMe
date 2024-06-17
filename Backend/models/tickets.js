'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tickets = sequelize.define('Tickets', {
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    purchaseDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    eventId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Events',
        key: 'id'
      }
    }
  });

  Tickets.associate = function(models) {
    Tickets.belongsTo(models.User, { foreignKey: 'userId' });
    Tickets.belongsTo(models.Event, { foreignKey: 'eventId' });
  };

  return Tickets;
};


