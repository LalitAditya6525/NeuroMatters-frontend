const mongoose = require('mongoose');

const progressLogSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  summary: String,
  moodScore: Number,
  productivity: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.models.ProgressLog || mongoose.model('ProgressLog', progressLogSchema);
