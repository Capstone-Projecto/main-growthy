const bcrypt = require('bcrypt');
const { users } = require('../models');
const route = require('express').Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../config.js');

// Endpoint for Google authentication
route.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Endpoint called after successful Google authentication
route.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/google/failure' }),
  async (req, res) => {
    const { id, displayName: name, email, picture: avatar } = req.user;

    try {
      const [user, created] = await users.findOrCreate({
        where: { id },
        defaults: { name, email, avatar }
      });

      const token = generateAuthToken(user);
      res.redirect(`/auth/google/success/${token}`);
    } catch (error) {
      console.error(error);
      res.redirect('/auth/google/failure');
    }
  }
);

// Endpoint called when Google authentication fails
route.get('/google/failure', (req, res) => {
  res.send('Failed to login');
});

// Test endpoint for authentication with Google
route.get('/test', (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

// Login logic
route.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await users.findOne({ where: { email } });

    // Check if user exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Wrong password' });
    }

    const token = generateAuthToken(user);
    return res.json({ message: 'Login success', token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Register logic
route.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await users.findOne({ where: { email } });

    if (userExists) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await users.create({
      name,
      email,
      password: hashedPassword
    });

    const token = generateAuthToken(user);
    return res.json({ message: 'Register success', token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Helper function to generate JWT token
const generateAuthToken = (user) => {
  const { id, name, email } = user;
  return jwt.sign({ id, name, email }, process.env.JWT_SECRET, {
    expiresIn: '1d'
  });
};

module.exports = route;
