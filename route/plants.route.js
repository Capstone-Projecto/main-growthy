require('dotenv').config();
const { plants } = require('../models');
const route = require("express").Router();

// Get all plants
route.get('/plants', async (req, res) => {
  try {
    const allPlants = await plants.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] } // Exclude unnecessary fields
    });

    res.json({
      message: 'Get plants success',
      data: allPlants
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get specific plant by detected plant ID
route.get('/plants/id/:id', async (req, res) => {
  const detectedPlantId = req.params.id;

  try {
    const detectedPlant = await plants.findOne({
      where: { id: detectedPlantId },
      attributes: { exclude: ['createdAt', 'updatedAt'] } // Exclude unnecessary fields
    });

    if (detectedPlant) {
      res.json({
        message: 'Get plant success',
        data: detectedPlant
      });
    } else {
      res.status(404).json({ message: 'Plant not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get specific plant by detected plant name
route.get('/plants/name/:name', async (req, res) => {
  const detectedPlantName = req.params.name;

  try {
    const detectedPlant = await plants.findOne({
      where: { name: detectedPlantName },
      attributes: { exclude: ['createdAt', 'updatedAt'] } // Exclude unnecessary fields
    });

    if (detectedPlant) {
      res.json({
        message: 'Get plant success',
        data: detectedPlant
      });
    } else {
      res.status(404).json({ message: 'Plant not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = route;
