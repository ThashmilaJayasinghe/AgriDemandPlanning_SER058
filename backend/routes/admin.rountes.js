const express = require('express');
const {createAdmin} = require("../api/admin.api");
const router = express.Router();

router.post('/',createAdmin);

module.exports = router;