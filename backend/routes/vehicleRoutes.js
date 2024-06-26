const express = require('express');
const { Vehicle } = require('../models');
const router = express.Router();

router.get('/vehicles', async (req, res) => {
  const vehicles = await Vehicle.findAll();
  res.json(vehicles);
});


module.exports = router;
