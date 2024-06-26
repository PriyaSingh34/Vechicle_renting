const sequelize = require('../config/database');
const { Vehicle } = require('../models');

const seedVehicles = async () => {
  await sequelize.sync({ force: true });

  await Vehicle.bulkCreate([
    { type: 'hatchback', model: 'Hatchback Model 1' },
    { type: 'suv', model: 'SUV Model 1' },
    { type: 'sedan', model: 'Sedan Model 1' },
    { type: 'cruiser', model: 'Cruiser Model 1' },
  ]);

  console.log('Vehicles seeded');
};

seedVehicles();
