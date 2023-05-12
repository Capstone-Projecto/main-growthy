const bcrypt = require('bcrypt');
const saltRounds = 10;
const{ users } = require('../models');
const route = require("express").Router();

// Login logic
route.post('/login', async(req, res) => {
    const email = req.body.email
    const password = req.body.password
    const isUserExist = await users.findOne({where: {email: email}})
  
    if(!isUserExist){
      return res.send('User not found')
    }else {
      const isPasswordMatch = bcrypt.compareSync(password, isUserExist.password);
      if(isPasswordMatch){
        return res.send('Login success')
      }else {
        return res.send('Wrong password')
      }
    }
  })
  
  // Register logic
  route.post('/register', async(req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
  
    // Hashing password
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
  
    // Register logic
    const isUserExist = await users.findOne({where: {email: email}})
    if(isUserExist){
      return res.send('User already exist')
    }else {
      await users.create({name: name, email: email, password: hash})
      return res.send('Register success')
    }
  })

  module.exports = route;