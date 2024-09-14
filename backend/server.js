const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User'); // Assuming you have a User model

const app = express();

// Detailed CORS configuration
app.use(
  cors({
    origin: 'http://localhost:3003', // Update to your frontend's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/your-database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api', require('./routes/register'));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
