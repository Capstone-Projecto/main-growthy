require('dotenv').config();
const { disease, plants, plants_has_disease } = require('../models');
const route = require("express").Router();
// const { Storage } = require('@google-cloud/storage');
// const { PredictionServiceClient } = require('@google-cloud/automl').v1;

// // Konfigurasi Google Cloud Storage
// const storage = new Storage({
//   projectId: process.env.GCP_PROJECT_ID,
// });

// // Konfigurasi Google Cloud AutoML
// const predictionClient = new PredictionServiceClient();
// const modelFullId = predictionClient.modelPath(
//   process.env.GCP_PROJECT_ID,
//   'asia-southeast2',
//   process.env.GCP_AUTOML_MODEL_ID
// );

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

// // Mendeteksi tanaman berdasarkan gambar yang diunggah oleh pengguna
// route.post('/plants/detect', async (req, res) => {
//   try {
//     // Mengambil file gambar yang diunggah dari body request
//     const file = req.files.image;

//     // Menyimpan file gambar ke Google Cloud Storage
//     const bucketName = process.env.PLANTS_ML_BUCKET;
//     const filePath = `${Date.now()}_${file.name}`;
//     const fileOptions = {
//       destination: filePath,
//       public: true
//     };
//     await storage.bucket(bucketName).upload(file.data, fileOptions);

//     // Mendapatkan URL publik file yang telah diunggah
//     const fileUrl = `https://storage.googleapis.com/${bucketName}/${filePath}`;

//     // Mengirim permintaan prediksi ke model AutoML
//     const payload = {
//       image: {
//         imageBytes: file.data
//       }
//     };
//     const [response] = await predictionClient.predict({
//       name: modelFullId,
//       payload: payload
//     });

//     // Mendapatkan hasil prediksi dari respons AutoML
//     const predictions = response.payload.map((prediction) => ({
//       label: prediction.displayName,
//       score: prediction.classification.score
//     }));

//     // Mencari tanaman berdasarkan label prediksi
//     const detectedPlant = await plants.findOne({
//       include: [
//         {
//           model: disease,
//           as: 'disease',
//           through: {
//             model: plants_has_disease,
//             attributes: []
//           }
//         }
//       ],
//       where: {
//         plant_desc: predictions[0].label
//       }
//     });

//     if (detectedPlant) {
//       res.send({
//         detectedPlant,
//         predictions
//       });
//     } else {
//       res.send({
//         message: 'Tanaman tidak ditemukan',
//         predictions
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Internal Server Error');
//   }
// });

module.exports = route;