// models/MeditationSession.js
const mongoose = require('mongoose');

const MeditationSessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  duration: Number,
  type: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.models.MeditationSession || mongoose.model('MeditationSession', MeditationSessionSchema);

