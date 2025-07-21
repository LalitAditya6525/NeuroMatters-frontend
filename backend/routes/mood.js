const express = require('express');
const router = express.Router();
const { addMood, getMoods } = require('../controllers/moodController');
const auth = require('../middleware/auth');

router.post('/add', auth, addMood);
router.get('/list', auth, getMoods);

module.exports = router;