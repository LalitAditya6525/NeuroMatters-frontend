const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  content: String,
  likes: [mongoose.Schema.Types.ObjectId],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.models.Post || mongoose.model('Post', postSchema);