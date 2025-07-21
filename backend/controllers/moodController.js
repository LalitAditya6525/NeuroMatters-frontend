const MoodEntry = require('../models/MoodEntry');

exports.addMood = async (req, res) => {
  try {
    const { mood, note } = req.body;
    const newMood = new MoodEntry({
      userId: req.user.id,
      mood,
      note,
    });
    await newMood.save();
    res.status(201).json(newMood);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getMoods = async (req, res) => {
  try {
    const moods = await MoodEntry.find({ userId: req.user.id }).sort({ timestamp: -1 });
    res.json(moods);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};
