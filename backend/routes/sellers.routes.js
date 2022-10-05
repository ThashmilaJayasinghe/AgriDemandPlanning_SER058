const express = require('express');
const router = express.Router();

const {addDemand, getDemands,getOneDemand, deleteDemand} = require('../api/sellers.api');

router.post('/addDemand/:id', addDemand);
router.get('/',getDemands)
router.get('/:id',getOneDemand);
router.delete('/', deleteDemand)
router.put('/editDemand/:id')

module.exports = router;