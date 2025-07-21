const mongoose = require('mongoose');

const reviewNoteSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  content: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.models.ReviewNote || mongoose.model('ReviewNote', reviewNoteSchema);
