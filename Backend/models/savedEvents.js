'use strict';
module.exports = (sequelize, DataTypes) => {
  const SavedEvents = sequelize.define('SavedEvents', {
    savedDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  SavedEvents.associate = function(models) {
    SavedEvents.belongsTo(models.User, { foreignKey: 'UserId' });
    SavedEvents.belongsTo(models.Event, { foreignKey: 'EventId' });
  };

  return SavedEvents;
};


  
