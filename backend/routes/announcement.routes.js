const express = require('express');
const router = express.Router();

const {createAnnouncement, getAnnouncements, updateAnnouncement, deleteAnnouncement} = require("../api/announcement.api");


router.post('/',createAnnouncement);
router.get("/",getAnnouncements);
router.put('/:id',updateAnnouncement);
router.delete('/:id',deleteAnnouncement);

module.exports = router;