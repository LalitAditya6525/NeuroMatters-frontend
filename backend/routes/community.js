const express = require('express');
const router = express.Router();
const { createPost, getPosts, addComment } = require('../controllers/postController');
const auth = require('../middleware/auth');

router.post('/post', auth, createPost);
router.get('/posts', getPosts);
router.post('/comment', auth, addComment);

module.exports = router;