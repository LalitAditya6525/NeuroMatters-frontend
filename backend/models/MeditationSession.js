// models/MeditationSession.js
const mongoose = require('mongoose');

const MeditationSessionSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  technique: String,
  duration: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.models.MeditationSession || mongoose.model('MeditationSession', MeditationSessionSchema);

