const express = require('express');
const router = express.Router();
const MeditationSession = require('../models/MeditationSession');
const auth = require('../middleware/auth');

// Start a meditation session
router.post('/start', auth, async (req, res) => {
  try {
    const { duration, type } = req.body;
    const session = new MeditationSession({
      userId: req.user.id,
      duration,
      type
    });
    await session.save();
    res.status(201).json(session);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// List user's meditation sessions
router.get('/list', auth, async (req, res) => {
  try {
    const sessions = await MeditationSession.find({ userId: req.user.id }).sort({ timestamp: -1 });
    res.json(sessions);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
