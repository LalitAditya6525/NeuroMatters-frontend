const express = require('express');
const router = express.Router();
const Resource = require('../models/Resource');

router.get('/list', async (req, res) => {
  try {
    const resources = await Resource.find().sort({ uploadedAt: -1 });
    res.json(resources);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
