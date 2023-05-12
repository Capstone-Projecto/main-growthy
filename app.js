const express = require('express')
const app = express()
const port = 3000
const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    'main-db',
    'root',
    '',
     {
       host: 'localhost',
       dialect: 'mysql'
     }
)
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });


app.get('/', (req, res) => {
  res.send('Welcome to Growthy')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})