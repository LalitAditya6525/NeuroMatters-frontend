const express = require('express');
const router = express.Router();
const Notification = require('../models/Notification');
const auth = require('../middleware/auth');

router.post('/create', auth, async (req, res) => {
  try {
    const { message, notifyAt } = req.body;
    const notification = new Notification({ userId: req.user.id, message, notifyAt });
    await notification.save();
    res.status(201).json(notification);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.get('/list', auth, async (req, res) => {
  try {
    const notifications = await Notification.find({ userId: req.user.id }).sort({ notifyAt: 1 });
    res.json(notifications);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
