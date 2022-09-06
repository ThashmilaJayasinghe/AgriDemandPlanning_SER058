const express = require('express');
const router = express.Router();

const {addDemand, getDemands} = require('../api/sellers.api');

router.post('/addDemand/:id', addDemand);
router.get('/',getDemands)

module.exports = router;