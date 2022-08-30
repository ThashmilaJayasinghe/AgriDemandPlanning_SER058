const mongoose = require('mongoose');

const farmerSchema = mongoose.Schema({
    Name: {
        type: String,
        required: [true, 'please enter name']
    },
    Address: {
        type: String,
        required: [true, 'please enter address']
    },
    Email: {
        type: String,
        required: [true, 'please enter email']
    },
    Categories: [{
        type: String,
        required: [true, 'please enter category']
    }],
    Hectare: {
        type: Number,
        required: [true, 'please enter number of hectares']
    }
});

module.exports = mongoose.model('Farmer', farmerSchema);