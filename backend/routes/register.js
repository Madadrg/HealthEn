const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust path if necessary

// Register route
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Ensure body data is available
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Register the new user
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ message: 'Error registering user' });
  }
});

module.exports = router;
