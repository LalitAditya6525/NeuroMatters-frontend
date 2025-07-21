const express = require('express');
const router = express.Router();
const { createNote, getNotes } = require('../controllers/noteController');
const auth = require('../middleware/auth');

router.post('/create', auth, createNote);
router.get('/list', auth, getNotes);

module.exports = router;