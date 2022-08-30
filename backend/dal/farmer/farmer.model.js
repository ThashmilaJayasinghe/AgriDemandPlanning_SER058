const mongoose = require('mongoose');

const farmerSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please enter name']
    },
    address: {
        type: String,
        required: [true, 'please enter address']
    },
    email: {
        type: String,
        required: [true, 'please enter email']
    },
    categories: [{
        type: String,
        required: [true, 'please enter category']
    }],
    hectare: {
        type: Number,
        required: [true, 'please enter number of hectares']
    }
});

module.exports = mongoose.model('Farmer', farmerSchema);