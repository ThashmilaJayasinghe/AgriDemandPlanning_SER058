const mongoose = require('mongoose');

const farmerSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'please enter name']
    },
    NIC: {
        type: String,
        required: [true, 'please enter NIC']
    },
    gender:{
        type: String,
        required: [true, 'please enter gender']
    },
    address: {
        type: String,
        required: [true, 'please enter address']
    },
    province: {
        type: String,
        required: [true, 'please enter province']
    },
    district: {
        type: String,
        required: [true, 'please enter district']
    },
    email: {
        type: String,
        required: [true, 'please enter email']
    },
    contactNumber:{
        type: Number,
        required: [true, 'please enter contact number']
    },
    // userName: {
    //     type: String,
    //     required: [true, 'please enter user name ']
    // },
    // password: {
    //     type: String,
    //     required: [true, 'please enter password']
    // },
    categories: [{
        type: Array,
        // required: [true, 'please enter category']
    }],
    hectare: {
        type: Number,
        // required: [true, 'please enter number of hectares']
    }
});

module.exports = mongoose.model('Farmer', farmerSchema);