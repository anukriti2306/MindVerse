const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
const aiChatbotRoutes = require('./routes/aiChatbotRoutes');
app.use('/api/ai', aiChatbotRoutes);

// Home route (optional)
app.get('/', (req, res) => {
  res.send('API is running 🚀');
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
