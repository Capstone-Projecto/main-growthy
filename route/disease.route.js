require('dotenv').config();
const { disease } = require('../models');
const route = require("express").Router();

// Get all diseases
route.get('/diseases', async (req, res) => {
  try {
    const allDiseases = await disease.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] } // Exclude unnecessary fields
    });

    res.json({
      message: 'Get diseases success',
      data: allDiseases
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get specific disease by disease ID
route.get('/diseases/id/:id', async (req, res) => {
  const diseaseId = req.params.id;

  try {
    const specificDisease = await disease.findOne({
      where: { id: diseaseId },
      attributes: { exclude: ['createdAt', 'updatedAt'] } // Exclude unnecessary fields
    });

    if (specificDisease) {
      res.json({
        message: 'Get disease success',
        data: specificDisease
      });
    } else {
      res.status(404).json({ message: 'Disease not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get specific disease by disease name
route.get('/diseases/name/:name', async (req, res) => {
  const diseaseName = req.params.name;

  try {
    const specificDisease = await disease.findOne({
      where: { name: diseaseName },
      attributes: { exclude: ['createdAt', 'updatedAt'] } // Exclude unnecessary fields
    });

    if (specificDisease) {
      res.json({
        message: 'Get disease success',
        data: specificDisease
      });
    } else {
      res.status(404).json({ message: 'Disease not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = route;
