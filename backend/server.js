const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Middleware
app.use(express.json());

const SignupRoute = require('./routes/signup');

app.use('/', SignupRoute)

// Database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});


app.use('/', SignupRoute)

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
