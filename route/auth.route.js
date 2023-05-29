const bcrypt = require('bcrypt');
const saltRounds = 10;
const { users } = require('../models');
const route = require("express").Router();
const jwt = require('jsonwebtoken');

// Login logic
route.post('/login', async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const isUserExist = await users.findOne({ where: { email: email } });

    // Check if user exists
    if (!isUserExist) {
      return res.status(404).json({ message: 'User not found' });
    } else {
      const isPasswordMatch = bcrypt.compareSync(password, isUserExist.password);
      const token = jwt.sign({ id: isUserExist.id }, process.env.JWT_SECRET);

      if (isPasswordMatch) {
        return res.json({
          message: 'Login success',
          token: token
        });
      } else {
        return res.status(401).json({ message: 'Wrong password' });
      }
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Register logic
route.post('/register', async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    // Hash password
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    // Check if user already exists
    const isUserExist = await users.findOne({ where: { email: email } });
    if (isUserExist) {
      return res.status(409).json({ message: 'User already exists' });
    } else {
      await users.create({ name: name, email: email, password: hash });
      return res.json({ message: 'Register success' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = route;
