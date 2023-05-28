require('dotenv').config();
const { disease, plants, plants_has_disease } = require('../models');
const route = require("express").Router();

// Mendapatkan semua penyakit tanaman beserta tanaman terkait
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

    res.send(allDiseases);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

// Mendapatkan penyakit spesifik berdasarkan ID penyakit
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
      res.send(specificDisease);
    } else {
      res.status(404).send('Penyakit tidak ditemukan');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = route;