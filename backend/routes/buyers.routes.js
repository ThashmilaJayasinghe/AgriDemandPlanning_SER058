const express = require('express');
const router = express.Router();

const {createBuyer, getBuyers, getBuyer, updateBuyer, deleteBuyer,userLogin, updateBuyerProfile} = require('../api/buyer.api')



router.post('/',createBuyer);
router.get('/', getBuyers);
router.get('/:id', getBuyer);
router.put('/:id', updateBuyer);
router.delete('/:id', deleteBuyer);
router.post('/login',userLogin)
router.put('profile/:id', updateBuyerProfile);

module.exports = router;
