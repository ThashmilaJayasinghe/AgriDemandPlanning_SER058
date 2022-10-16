const express = require('express');
const router = express.Router();

const { createCrop, getCrops, updateDemandForCrop, updateSupplyForCrop } = require('../api/crop.api');

router.post('/', createCrop);
router.get('/', getCrops);
router.post('/updateDemand', updateDemandForCrop);
router.post('/updateSupply', updateSupplyForCrop);

module.exports = router;