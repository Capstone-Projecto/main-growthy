const express = require('express');
const app = express();
const port = 3000;
const route = require('./route');

// Catch body from request
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/", route)

// Welcome page
app.get('/', (req, res) => {
  res.send('Welcome to Growthy') //frontend landing page
})

// Listen to port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})