// routes/auth.js
import express from 'express';
import User from '../models/User.js';

const router = express.Router();

//http://localhost:3000/auth/register
router.post('/register', async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ username, password, email });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user', error);
    res.status(500).json({ message: 'Error registering user' });
  }
});


// http://localhost:3000/auth/login
router.get('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in user', error);
    res.status(500).json({ message: 'Error logging in user' });
  }
});



export default router;
