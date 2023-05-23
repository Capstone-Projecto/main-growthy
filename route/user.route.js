const { users, financial_dashboard, users_has_financial_dashboard } = require('../models');
const route = require("express").Router();
const multer = require('multer');
const { Storage } = require('@google-cloud/storage');
const multerGoogleStorage = require('multer-google-storage');

// Konfigurasi multer untuk mengunggah file
const multerUpload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // Batas ukuran file (dalam byte), dalam contoh ini 10MB
  },
});

// Membuat objek Storage menggunakan projectId dan keyFilename
const storage = new Storage({
  projectId: 'growthy-app',
  keyFilename: 'serviceAccountKey.json'
});

// Membuat objek bucket menggunakan nama bucket yang diinginkan
const bucket = storage.bucket('profile-user');

// Membuat handler untuk mengunggah file menggunakan multerGoogleStorage
const uploadHandler = multerUpload.single('avatar');

// Get all users
route.get('/users', async (req, res) => {
  try {
    const usersData = await users.findAll({
      include: [
        {
          model: financial_dashboard,
          as: "financial_dashboard",
          through: {
            model: users_has_financial_dashboard,
            attributes: []
          }
        }
      ]
    });
    res.send(usersData);
  } catch (error) {
    console.log(error);
    res.send('Error retrieving users data');
  }
});

// Edit profile
route.put('/edit_profile', uploadHandler, async (req, res) => {
  const id = req.user.id;
  const name = req.body.name;
  const email = req.body.email;
  const gender = req.body.gender;
  const phone = req.body.phone;
  const address = req.body.address;

  try {
    const user = await users.findOne({ where: { id: id } });
    if (!user) {
      return res.send('User not found');
    }

    // Jika ada file avatar yang diunggah, simpan di Google Cloud Storage
    let avatarUrl = user.avatar;
    if (req.file) {
      const file = req.file;
      const filename = `${Date.now()}-${file.originalname}`;

      const blob = bucket.file(filename);
      const blobStream = blob.createWriteStream({
        resumable: false,
        gzip: true
      });

      blobStream.on('error', (err) => {
        console.log(err);
        res.send('Error uploading avatar');
      });

      blobStream.on('finish', () => {
        // Set URL avatar yang baru diunggah
        avatarUrl = `https://storage.googleapis.com/${bucket.name}/${filename}`;

        // Hapus file avatar yang lama jika ada
        if (user.avatar) {
          const oldFilename = user.avatar.split('/').pop();
          const oldFile = bucket.file(oldFilename);
          oldFile.delete().catch((err) => {
            console.log(err);
          });
        }

        // Perbarui profil pengguna
        users.update(
          {
            name: name,
            email: email,
            gender: gender,
            phone: phone,
            address: address,
            avatar: avatarUrl
          },
          { where: { id: id } }
        )
          .then(() => {
            res.send('Profile updated successfully');
          })
          .catch((error) => {
            console.log(error);
            res.send('Error updating profile');
          });
        });

        blobStream.end(file.buffer);
      } else {
        // Jika tidak ada file avatar yang diunggah, langsung perbarui profil pengguna
        users.update(
          {
            name: name,
            email: email,
            gender: gender,
            phone: phone,
            address: address,
            avatar: avatarUrl
          },
          { where: { id: id } }
        )
          .then(() => {
            res.send('Profile updated successfully');
          })
          .catch((error) => {
            console.log(error);
            res.send('Error updating profile');
          });
      }
    } catch (error) {
      console.log(error);
      res.send('Error updating profile');
    }
  });
  
  module.exports = route;