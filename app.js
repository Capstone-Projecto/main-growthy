const express = require('express');
const app = express();
const port = 3000;
const route = require('./route');
const session = require('express-session');
const passport = require('passport');

// Catch body from request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'secret'
}));

app.use(passport.initialize());
app.use(passport.session());

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
  console.error(err);
  res.status(500).send(`Internal Server Error: ${err.message}`);
});

// Listen to port
app.listen(port, () => {
  console.log(`Growthy listening on port ${port}`);
});