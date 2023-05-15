const{ disease, plants, plants_has_disease } = require('../models');
const route = require("express").Router();

// Get all users
route.get('/plants', async(req, res) => {
    await plants.findAll({
        include: [{
            model: disease,
            as: "disease",
            through: {
              model: plants_has_disease,
              attributes: []
            }
        }]
    }).then(plants => {
    res.send(plants)  }).catch(error=> 
      console.log(error))
})

module.exports = route;