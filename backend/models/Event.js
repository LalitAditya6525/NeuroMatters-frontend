const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  dateTime: Date,
  speaker: String,
  link: String
});

module.exports = mongoose.models.Event || mongoose.model('Event', eventSchema);
