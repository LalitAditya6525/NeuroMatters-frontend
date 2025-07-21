const express = require('express');
const router = express.Router();
const Goal = require('../models/Goal');
const auth = require('../middleware/auth');

router.post('/create', auth, async (req, res) => {
  try {
    const { title, description, targetDate } = req.body;
    const goal = new Goal({ userId: req.user.id, title, description, targetDate });
    await goal.save();
    res.status(201).json(goal);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.get('/list', auth, async (req, res) => {
  try {
    const goals = await Goal.find({ userId: req.user.id });
    res.json(goals);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.put('/complete/:id', auth, async (req, res) => {
  try {
    const goal = await Goal.findByIdAndUpdate(req.params.id, { completed: true }, { new: true });
    res.json(goal);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
