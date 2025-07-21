const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  message: String,
  notifyAt: Date,
  isSent: { type: Boolean, default: false }
});

module.exports = mongoose.models.Notification || mongoose.model('Notification', notificationSchema);
