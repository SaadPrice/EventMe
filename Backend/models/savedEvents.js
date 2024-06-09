const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SavedEvent = sequelize.define('savedEvent', {});

module.exports = SavedEvent;
