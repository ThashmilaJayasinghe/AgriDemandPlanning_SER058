const express = require('express');
const router = express.Router();

const { createMessage } = require('../api/message.api');

router.post('/', createMessage);


module.exports = router;