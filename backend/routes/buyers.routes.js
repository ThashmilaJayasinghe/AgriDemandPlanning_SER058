const express = require('express');
const router = express.Router();

const {createBuyer, getBuyers, getBuyer, updateBuyer, deleteBuyer} = require('../api/buyer.api')

router.post('/',createBuyer);
router.get('/', getBuyers);
router.get('/:id', getBuyer);
router.put('/:id', updateBuyer);
router.delete('/:id', deleteBuyer);

module.exports = router;
