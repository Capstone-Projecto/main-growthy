const route = require('express').Router();
const authRoute = require('./auth.route');
const userRoute = require('./user.route');

route.use('/auth', authRoute);
route.use('/user', userRoute);

module.exports = route;