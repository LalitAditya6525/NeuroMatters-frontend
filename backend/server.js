const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB error:", err));

// Route imports
app.use('/api/auth', require('./routes/auth'));
app.use('/api/mood', require('./routes/mood'));
app.use('/api/meditation', require('./routes/meditation'));
app.use('/api/notes', require('./routes/notes'));
app.use('/api/community', require('./routes/community'));
app.use('/api/kriya', require('./routes/kriya'));
app.use('/api/goals', require('./routes/goals'));
app.use('/api/progress', require('./routes/progress'));
app.use('/api/notifications', require('./routes/notifications'));
app.use('/api/events', require('./routes/events'));
app.use('/api/chat', require('./routes/chat'));
app.use('/api/resources', require('./routes/resources'));

// Default route
app.get('/', (req, res) => res.send('🧠 Mindease Backend is Running'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

