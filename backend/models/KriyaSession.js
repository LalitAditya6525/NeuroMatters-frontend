const mongoose = require('mongoose');

const kriyaSessionSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  duration: Number,
  feedback: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.models.KriyaSession || mongoose.model('KriyaSession', kriyaSessionSchema);