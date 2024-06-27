const sequelize = require('../config/database');
const { Vehicle } = require('../models');

const seedVehicles = async () => {
  await sequelize.sync({ force: true });

  await Vehicle.bulkCreate([
    { type: 'hatchback', model: 'Hatchback Model 1', wheels: 4 },
    { type: 'suv', model: 'SUV Model 1', wheels: 4 },
    { type: 'sedan', model: 'Sedan Model 1', wheels: 4 },
    { type: 'cruiser', model: 'Cruiser Model 1', wheels: 2 },
    { type: 'sport', model: 'Sport Bike Model 1', wheels: 2 },
    { type: 'touring', model: 'Touring Bike Model 1', wheels: 2 },
    { type: 'compact', model: 'Compact Car Model 1', wheels: 4 },
    { type: 'pickup', model: 'Pickup Truck Model 1', wheels: 4 },
    { type: 'van', model: 'Van Model 1', wheels: 4 },
    { type: 'motorcycle', model: 'Motorcycle Model 1', wheels: 2 },
    { type: 'scooter', model: 'Scooter Model 1', wheels: 2 },
    { type: 'electric', model: 'Electric Bike Model 1', wheels: 2 },
    { type: 'roadster', model: 'Roadster Model 1', wheels: 4 },
    { type: 'convertible', model: 'Convertible Car Model 1', wheels: 4 },
    { type: 'minivan', model: 'Minivan Model 1', wheels: 4 },
    { type: 'moped', model: 'Moped Model 1', wheels: 2 },
    { type: 'utility', model: 'Utility ATV Model 1', wheels: 4 },
    { type: 'dirtbike', model: 'Dirt Bike Model 1', wheels: 2 },
    // Additional entries with different types
    { type: 'luxury', model: 'Luxury Car Model 1', wheels: 4 },
    { type: 'hybrid', model: 'Hybrid SUV Model 1', wheels: 4 },
    // { type: 'truck', model: 'Heavy Duty Truck Model 1', wheels: 6 },
    { type: 'jet-ski', model: 'Jet Ski Model 1', wheels: 0 },
    { type: 'snowmobile', model: 'Snowmobile Model 1', wheels: 0 },
    { type: 'golf-cart', model: 'Golf Cart Model 1', wheels: 4 },
  ]);

  console.log('Vehicles seeded');
};

seedVehicles();
