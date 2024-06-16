const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// Create Post
router.post('/', async (req, res) => {
  const { author, content, media } = req.body;
  const post = new Post({ author, content, media, createdAt: new Date() });
  await post.save();
  res.status(201).send(post);
});

// Get All Posts
router.get('/', async (req, res) => {
  const posts = await Post.find().populate('author').populate('comments');
  res.send(posts);
});

module.exports = router;
