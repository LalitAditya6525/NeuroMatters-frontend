const mongoose = require('mongoose');

const communitySchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, default: 'Anonymous' },
}, { timestamps: true });

module.exports = mongoose.model('Community', communitySchema);
