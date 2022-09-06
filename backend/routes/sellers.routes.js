const express = require('express');
const addDemand = require('../api/sellers.api');
const router = express.Router();

router.post('/addDemand/:id', addDemand);

module.exports = router;