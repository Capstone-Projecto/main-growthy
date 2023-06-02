const { users, financial_dashboard, users_has_financial_dashboard } = require('../models');
const route = require("express").Router();
const multer = require('multer');
const { Storage } = require('@google-cloud/storage');

// Configure multer for file upload
const multerUpload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB file size limit
  },
});

// Create Storage object using projectId and keyFilename
const storage = new Storage({
  projectId: process.env.GCP_PROJECT_ID,
  keyFilename: process.env.STORAGE_CREDENTIALS,
});

// Create bucket object with desired bucket name
const bucket = storage.bucket('profile-user');

// Create handler for file upload using multer
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

    // If an avatar file is uploaded, save it to Google Cloud Storage
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
        // Set the newly uploaded avatar URL
        avatarUrl = `https://storage.googleapis.com/${bucket.name}/${filename}`;

        // Delete the old avatar file if it exists
        if (user.avatar) {
          const oldFilename = user.avatar.split('/').pop();
          const oldFile = bucket.file(oldFilename);
          try {
            await oldFile.delete();
          } catch (error) {
            console.log(error);
          }
        }

        // Update user profile
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
      // If no avatar file is uploaded, update user profile directly
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

// Edit password
route.put('/edit_password', async (req, res) => {
  const { id, currentPassword, newPassword } = req.body;

  try {
    const user = await users.findByPk(id);
    if (!user) {
      return res.status(404).send('User not found');
    }

    // Check if current password matches
    const isPasswordMatch = bcrypt.compareSync(currentPassword, user.password);
    if (!isPasswordMatch) {
      return res.status(401).send('Current password is incorrect');
    }

    // Hash the new password
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(newPassword, salt);

    // Update user password
    try {
      await user.update({
        password: hashedPassword
      });
      res.send('Password updated successfully');
    } catch (error) {
      console.log(error);
      res.status(500).send('Error updating password');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Error updating password');
  }
});

module.exports = route;
