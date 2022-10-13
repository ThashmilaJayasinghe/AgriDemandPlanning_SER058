const express = require('express');
const router = express.Router();

const { createMessage, viewMessages } = require('../api/message.api');

router.post('/', createMessage);
router.get('/:id', viewMessages);


module.exports = router;