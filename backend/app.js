const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const vehicleRoutes = require('./routes/vehicleRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();

// Use the CORS middleware
const corsOptions = {
  origin: 'http://localhost:3001', // Replace with your frontend URL
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(express.json());

app.use('/api', vehicleRoutes);
app.use('/api', bookingRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
