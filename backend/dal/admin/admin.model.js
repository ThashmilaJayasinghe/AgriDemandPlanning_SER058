const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, "please enter user name "],
    },
    password: {
        type: String,
        required: [true, "please enter password"],
    },
    role:{
        type:String,
        required: [true]
    }
})
module.exports = mongoose.model("Admin",adminSchema);