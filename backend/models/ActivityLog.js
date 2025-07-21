const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  activity: String,
  duration: Number,
  completedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.models.ActivityLog || mongoose.model('ActivityLog', activityLogSchema);
