const express = require('express');
const router = express.Router();

const { createMessage, viewMessages, updateMessage } = require('../api/message.api');

router.post('/', createMessage);
router.get('/:id', viewMessages);
router.put('/:id', updateMessage);


module.exports = router;