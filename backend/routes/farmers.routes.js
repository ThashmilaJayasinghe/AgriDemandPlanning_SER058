const express = require('express');
const router = express.Router();

const { createFarmer, getFarmers, getFarmer, updateFarmer, deleteFarmer } = require('../api/farmers.api');

router.post('/', createFarmer);
router.get('/', getFarmers);
router.get('/:id', getFarmer);
router.put('/:id', updateFarmer);
router.delete('/:id', deleteFarmer);

module.exports = router;