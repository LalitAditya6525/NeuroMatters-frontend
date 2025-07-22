// routes/community.js

const express = require('express');
const router = express.Router();
const Community = require('../models/Community');
const authenticate = require('../middleware/auth');

// GET all posts
router.get('/', authenticate, async (req, res) => {
  try {
    const posts = await Community.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ POST a new post
router.post('/create', authenticate, async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  try {
    const newPost = new Community({
      title,
      content,
      author: req.user.name || req.user.email, // depends on your user model
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ message: 'Error creating post' });
  }
});

module.exports = router;
