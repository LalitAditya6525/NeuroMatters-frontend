const Post = require('../models/Post');
const Comment = require('../models/Comment');

exports.createPost = async (req, res) => {
  try {
    const { content } = req.body;
    const post = new Post({ userId: req.user.id, content });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

exports.addComment = async (req, res) => {
  try {
    const { postId, comment } = req.body;
    const newComment = new Comment({ postId, userId: req.user.id, comment });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};