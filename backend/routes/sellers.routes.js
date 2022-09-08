const express = require('express');
const router = express.Router();

const {addDemand, getDemands,getOneDemand} = require('../api/sellers.api');

router.post('/addDemand/:id', addDemand);
router.get('/',getDemands)
router.get('/:id',getOneDemand);

module.exports = router;