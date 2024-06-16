const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

mongoose.connect('mongodb://localhost:27017/social_network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

// Example route for creating a post
app.post('/posts', async (req, res) => {
  const { author, content, media } = req.body;
  const post = new Post({ author, content, media, createdAt: new Date() });
  await post.save();
  io.emit('new_post', post);
  res.status(201).send(post);
});

// WebSocket connection
io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
