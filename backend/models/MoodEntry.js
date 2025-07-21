const mongoose = require('mongoose');

const moodSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    mood: String,
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.models.MoodEntry || mongoose.model('MoodEntry', moodSchema);
