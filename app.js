require('@google-cloud/debug-agent').start() // Debugging

const express = require('express');
const app = express();
const port = 3000;
const route = require('./route');

// Catch body from request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", route);

// Welcome page
app.get('/', (req, res) => {
  res.send('Welcome to Growthy'); // Frontend landing page
});

// Route not found
app.use((req, res, next) => {
  res.status(404).send('Route not found');
});

// Error handling
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Error');
});

// Listen to port
app.listen(port, () => {
  console.log(`Growthy listening on port ${port}`);
});