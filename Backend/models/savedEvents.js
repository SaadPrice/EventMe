const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SavedEvent = sequelize.define('SavedEvent', {});

module.exports = SavedEvent;
