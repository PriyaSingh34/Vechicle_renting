const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('vehicle_rental', 'admin', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
