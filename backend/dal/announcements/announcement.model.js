const mongoose = require('mongoose');

const announcementSchema = mongoose.Schema({
    heading:{
        type: String,
        required: [true,'please enter heading']
    },
    message:{
        type: String,
        required: [true, 'please enter message']
    },
    postingDate:{
        type: Date,
        required:[true,'please enter posting date']
    },
    DeadLine:{
        type: Date,
        required:[true,'please enter Dead line']
    },
    viewer:{
        type: String,
        required:[true,'please enter viewer']
    }
})

module.exports = mongoose.model('Announcement',announcementSchema)