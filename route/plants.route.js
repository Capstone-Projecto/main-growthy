require('dotenv').config();
const { disease, plants, plants_has_disease } = require('../models');
const route = require("express").Router();

// Mengambil semua tanaman beserta penyakit terkait
route.get('/plants', async (req, res) => {
  try {
    const allPlants = await plants.findAll({
      include: [
        {
          model: disease,
          as: 'disease',
          through: {
            model: plants_has_disease,
            attributes: []
          }
        }
      ]
    });

    res.send(allPlants);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

// Mendapatkan tanaman spesifik berdasarkan ID tanaman yang terdeteksi
route.get('/plants/:id', async (req, res) => {
  const detectedPlantId = req.params.id;

  try {
    const detectedPlant = await plants.findOne({
      where: { id: detectedPlantId },
      include: [
        {
          model: disease,
          as: 'disease',
          through: {
            model: plants_has_disease,
            attributes: []
          }
        }
      ]
    });

    if (detectedPlant) {
      res.send(detectedPlant);
    } else {
      res.status(404).send('Plant not found');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = route;