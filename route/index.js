const { Router } = require('express');
const route = Router();
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const plantsRoute = require('./plants.route');
const diseaseRoute = require('./disease.route');
const financialRoute = require('./financial.route');
const verifiedToken = require('../middleware/auth');

route.use('/auth', authRoute);
route.use('/user', verifiedToken, userRoute);
route.use('/plant', plantsRoute);
route.use('/disease', diseaseRoute);
route.use('/financial', verifiedToken, financialRoute);

module.exports = route;