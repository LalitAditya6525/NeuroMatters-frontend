const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const Booking = require('../models/Bookings');
const auth = require('../middleware/auth');

router.get('/list', async (req, res) => {
  try {
    const events = await Event.find().sort({ dateTime: 1 });
    res.json(events);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.post('/book/:eventId', auth, async (req, res) => {
  try {
    const booking = new Booking({ userId: req.user.id, eventId: req.params.eventId });
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;