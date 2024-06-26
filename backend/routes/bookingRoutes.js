const express = require('express');
const router = express.Router();
const { Booking } = require('../models'); // Import your Booking model

// POST /api/bookings
router.post('/bookings', async (req, res) => {
  try {
    const { vehicleId, userId, startDate, endDate } = req.body;

    // Example: Create a new booking
    const newBooking = await Booking.create({
      vehicleId,
      userId,
      startDate,
      endDate
    });

    res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
