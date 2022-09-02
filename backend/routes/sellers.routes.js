const express = require('express');
const addDemand = require('../api/sellers.api');
const router = express.Router();

router.post('/addDemand', addDemand);

module.exports = router;