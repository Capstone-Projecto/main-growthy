const express = require('express')
const app = express()
const port = 3000
const {users} = require('./models')

app.get('/', (req, res) => {
  res.send('Welcome to Growthy')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/users', async(req, res) => {
  await users.findAll().then(users => {
  res.send(users)  }).catch(error=> 
    console.log(error))
})