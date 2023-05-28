require('dotenv').config();
const { disease, plants, plants_has_disease } = require('../models');
const route = require("express").Router();
// const { Storage } = require('@google-cloud/storage');
// const { PredictionServiceClient } = require('@google-cloud/automl').v1;

// // Membuat instance Google Cloud Storage
// const storage = new Storage();
// // Membaca konfigurasi GCP dari file .env
// const projectId = process.env.GCP_PROJECT_ID;
// const bucketName = process.env.DISEASE_ML_BUCKET;

// // Membuat instance Google Cloud AutoML Prediction Service
// const predictionServiceClient = new PredictionServiceClient();
// // Membaca konfigurasi GCP dari file .env
// const modelId = process.env.GCP_AUTOML_MODEL_ID;

// // Endpoint untuk mendeteksi penyakit berdasarkan gambar
// route.post('/diseases/detect', async (req, res) => {
//   try {
//     // Mendapatkan file gambar dari body request
//     const imageFile = req.files.image;
    
//     // Upload file gambar ke Google Cloud Storage
//     const bucket = storage.bucket(bucketName);
//     const gcsFileName = `${Date.now()}_${imageFile.name}`;
//     const file = bucket.file(gcsFileName);
//     await file.save(imageFile.data);
//     await file.makePublic();

//     // Mendapatkan URL publik file gambar yang diunggah
//     const imageUrl = `https://storage.googleapis.com/${bucketName}/${gcsFileName}`;

//     // Memanggil model machine learning untuk melakukan prediksi
//     const request = {
//       name: predictionServiceClient.modelPath(projectId, 'asia-southeast2', modelId),
//       payload: {
//         image: {
//           imageBytes: imageFile.data.toString('base64')
//         }
//       }
//     };
//     const [response] = await predictionServiceClient.predict(request);

//     // Mendapatkan hasil prediksi
//     const predictions = response.payload.map((prediction) => {
//       return {
//         displayName: prediction.displayName,
//         score: prediction.classification.score
//       };
//     });

//     res.send({
//       imageUrl,
//       predictions
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Internal Server Error');
//   }
// });

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