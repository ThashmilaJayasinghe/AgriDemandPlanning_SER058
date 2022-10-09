const mongoose = require('mongoose');

const cropSchema = mongoose.Schema({
    category: {
        type: String,
        required: [true, 'please enter category']
    },
    types: [{
        name: String,
        supply: Number,
        demand: Number,
        // required: [true, 'please enter type']
    }],
});

module.exports = mongoose.model('Crop', cropSchema);