const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: String,
  type: String,
  link: String,
  description: String,
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.models.Resource || mongoose.model('Resource', resourceSchema);