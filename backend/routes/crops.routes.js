const express = require('express');
const router = express.Router();

const { createCrop, getCrops, updateDemandForCrop } = require('../api/crop.api');

router.post('/', createCrop);
router.get('/', getCrops);
router.post('/updateDemand', updateDemandForCrop);

module.exports = router;