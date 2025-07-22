const mongoose = require('mongoose');

const kriyaSessionSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  technique: String,
  duration: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.models.KriyaSession || mongoose.model('KriyaSession', kriyaSessionSchema);