const mongoose = require('mongoose');

const breathingSessionSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  technique: String,
  duration: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.models.BreathingSession || mongoose.model('BreathingSession', breathingSessionSchema);
