const mongoose = require('mongoose');

const ChatMessageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  sender: {
    type: String, // e.g. "user" or "bot"
    required: true
  },
  message: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

// ✅ Prevent OverwriteModelError
module.exports = mongoose.models.ChatMessage || mongoose.model('ChatMessage', ChatMessageSchema);
