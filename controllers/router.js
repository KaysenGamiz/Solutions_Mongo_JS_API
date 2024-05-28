const express = require('express');
const path = require('path');
const router = express.Router();

const corteRouter = require(path.join(__dirname, 'routes', 'corteRoute.js'));

router.use('/cortes', corteRouter);

module.exports = router;