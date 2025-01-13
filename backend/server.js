const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

// Middleware
app.use(express.json());

// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
