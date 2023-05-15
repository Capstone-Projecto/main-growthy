const{ users, financial_dashboard, users_has_financial_dashboard } = require('../models');
const route = require("express").Router();

// Get all users
route.get('/users', async(req, res) => {
    await users.findAll({
        include: [{
            model: financial_dashboard,
            as: "financial_dashboard",
            through: {
              model: users_has_financial_dashboard,
              attributes: []
            }
        }]
    }).then(users => {
    res.send(users)  }).catch(error=> 
      console.log(error))
})

module.exports = route;