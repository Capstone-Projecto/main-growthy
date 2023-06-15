require('dotenv').config();
const { disease, plants, plants_has_disease } = require('../models');
const route = require("express").Router();

// Get all diseases with related plants
route.get('/diseases', async (req, res) => {
  try {
    const allDiseases = await disease.findAll({
      include: [
        {
          model: plants,
          as: 'plants',
          through: {
            model: plants_has_disease,
            attributes: []
          }
        }
      ]
    });

    res.json(allDiseases);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get specific disease by disease ID
route.get('/diseases/:id', async (req, res) => {
  const diseaseId = req.params.id;

  try {
    const specificDisease = await disease.findOne({
      where: { id: diseaseId },
      include: [
        {
          model: plants,
          as: 'plants',
          through: {
            model: plants_has_disease,
            attributes: []
          }
        }
      ]
    });

    if (specificDisease) {
      res.json(specificDisease);
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
      include: [
        {
          model: plants,
          as: 'plants',
          through: {
            model: plants_has_disease,
            attributes: []
          }
        }
      ]
    });

    if (specificDisease) {
      res.json(specificDisease);
    } else {
      res.status(404).json({ message: 'Disease not found' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = route;
