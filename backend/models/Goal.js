const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  title: String,
  description: String,
  targetDate: Date,
  completed: { type: Boolean, default: false }
});

module.exports = mongoose.models.Goal || mongoose.model('Goal', goalSchema);
