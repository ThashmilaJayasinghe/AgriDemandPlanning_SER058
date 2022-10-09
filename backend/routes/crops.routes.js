const express = require('express');
const router = express.Router();

const { createCrop, getCrops } = require('../api/crop.api');

router.post('/', createCrop);
router.get('/', getCrops);

module.exports = router;