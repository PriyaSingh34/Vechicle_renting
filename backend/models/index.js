const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Vehicle = require('./vehicle');
const Booking = require('./booking');

const models = {
  Vehicle: Vehicle(sequelize, Sequelize.DataTypes),
  Booking: Booking(sequelize, Sequelize.DataTypes),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
