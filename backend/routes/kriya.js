const express = require('express');
const router = express.Router();
const KriyaSession = require('../models/KriyaSession');
const auth = require('../middleware/auth');

router.post('/start', auth, async (req, res) => {
  try {
    const { duration, feedback } = req.body;
    const session = new KriyaSession({ userId: req.user.id, duration, feedback });
    await session.save();
    res.status(201).json(session);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.get('/list', auth, async (req, res) => {
  try {
    const sessions = await KriyaSession.find({ userId: req.user.id }).sort({ timestamp: -1 });
    res.json(sessions);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;