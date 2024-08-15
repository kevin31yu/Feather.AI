import express from 'express';
import User from '../models/User.js'; // Adjust path as needed

const router = express.Router();

// Sign-up route
router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const user = new User({ username, email, password });
    await user.save();

    // Respond with success
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during sign-up:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find user by email
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // Check if password matches (plain text comparison)
      if (user.password !== password) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
  
      // Successful sign-in
      res.status(200).json({ message: 'Sign-in successful', user: { email: user.email, username: user.username } });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });

router.get('/', (req, res) => {
    res.send('WanderPlan user server running');
});


export default router;
