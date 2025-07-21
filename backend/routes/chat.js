const express = require('express');
const router = express.Router();
const ChatMessage = require('../models/ChatMessage');
const auth = require('../middleware/auth');

router.post('/send', auth, async (req, res) => {
  try {
    const { sender, message } = req.body;
    const msg = new ChatMessage({ userId: req.user.id, sender, message });
    await msg.save();
    res.status(201).json(msg);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

router.get('/history', auth, async (req, res) => {
  try {
    const messages = await ChatMessage.find({ userId: req.user.id }).sort({ timestamp: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;