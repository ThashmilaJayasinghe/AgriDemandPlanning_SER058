const express = require('express');
const router = express.Router();

const { createMessage } = require('../api/message.api');

router.post('/', createMessage);
// router.get('/', getFarmers);
// router.get('/:id', getFarmer);
// router.put('/:id', updateFarmer);
// router.delete('/:id', deleteFarmer);

module.exports = router;