const MeditationSession = require('../models/MeditationSession');

exports.startSession = async (req, res) => {
  try {
    const { duration, type } = req.body;
    const session = new MeditationSession({ userId: req.user.id, duration, type });
    await session.save();
    res.status(201).json(session);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getSessions = async (req, res) => {
  try {
    const sessions = await MeditationSession.find({ userId: req.user.id }).sort({ completedAt: -1 });
    res.json(sessions);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};