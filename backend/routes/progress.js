const express = require('express');
const router = express.Router();
const ProgressLog = require('../models/ProgressLog');
const auth = require('../middleware/auth');

router.post('/log', auth, async (req, res) => {
  try {
    const { summary, moodScore, productivity } = req.body;
    const log = new ProgressLog({
      userId: req.user.id,
      summary,
      moodScore,
      productivity
    });
    await log.save();
    res.status(201).json(log);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.get('/list', auth, async (req, res) => {
  try {
    const logs = await ProgressLog.find({ userId: req.user.id }).sort({ date: -1 });
    res.json(logs);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;