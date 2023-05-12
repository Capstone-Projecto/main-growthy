const{ users } = require('../models');
const route = require("express").Router();

// Get all users
route.get('/users', async(req, res) => {
    await users.findAll().then(users => {
    res.send(users)  }).catch(error=> 
      console.log(error))
})

module.exports = route;