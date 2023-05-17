const route = require('express').Router();
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const plantsRoute = require('./plants.route');
const financialRoute = require('./financial.route');

route.use('/auth', authRoute);
route.use('/user', userRoute);
route.use('/plant', plantsRoute);
route.use('/financial', financialRoute);

module.exports = route;