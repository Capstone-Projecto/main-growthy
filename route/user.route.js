const { users, financial_dashboard, users_has_financial_dashboard } = require('../models');
const route = require("express").Router();
const multer = require('multer');
const { Storage } = require('@google-cloud/storage');

// Konfigurasi multer untuk mengunggah file
const multerUpload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // Batas ukuran file (dalam byte) 5MB
  },
});

// Membuat objek Storage menggunakan projectId dan keyFilename
const storage = new Storage({
  projectId: 'growthy-app',
  keyFilename: 'serviceAccountKey.json'
});

// Membuat objek bucket menggunakan nama bucket yang diinginkan
const bucket = storage.bucket('profile-user');

// Membuat handler untuk mengunggah file menggunakan multer
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
    res.status(500).send('Error retrieving users data');
  }
});

// Edit profile
route.put('/edit_profile', uploadHandler, async (req, res) => {
  const { id, name, email, gender, phone, address } = req.body;

  try {
    const user = await users.findByPk(id);
    if (!user) {
      return res.status(404).send('User not found');
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
        res.status(500).send('Error uploading avatar');
      });

      blobStream.on('finish', async () => {
        // Set URL avatar yang baru diunggah
        avatarUrl = `https://storage.googleapis.com/${bucket.name}/${filename}`;

        // Hapus file avatar yang lama jika ada
        if (user.avatar) {
          const oldFilename = user.avatar.split('/').pop();
          const oldFile = bucket.file(oldFilename);
          try {
            await oldFile.delete();
          } catch (error) {
            console.log(error);
          }
        }

        // Perbarui profil pengguna
        try {
          await user.update({
            name,
            email,
            gender,
            phone,
            address,
            avatar: avatarUrl
          });
          res.send('Profile updated successfully');
        } catch (error) {
          console.log(error);
          res.status(500).send('Error updating profile');
        }
      });

      blobStream.end(file.buffer);
    } else {
      // Jika tidak ada file avatar yang diunggah, langsung perbarui profil pengguna
      try {
        await user.update({
          name,
          email,
          gender,
          phone,
          address,
          avatar: avatarUrl
        });
        res.send('Profile updated successfully');
      } catch (error) {
        console.log(error);
        res.status(500).send('Error updating profile');
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Error updating profile');
  }
});

module.exports = route;