const mongoose = require("mongoose");

const buyerSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "please enter name"],
  },
  NIC: {
    type: String,
    required: [true, "please enter NIC"],
  },
  ShopName: {
    type: String,
    required: [true, "please enter shop name"],
  },
  gender: {
    type: String,
    required: [true, "please enter gender"],
  },
  address: {
    type: String,
    required: [true, "please enter address"],
  },
  province: {
    type: String,
    required: [true, "please enter province"],
  },
  district: {
    type: String,
    required: [true, "please enter district"],
  },
  email: {
    type: String,
    required: [true, "please enter email"],
  },
  contactNumber: {
    type: Number,
    required: [true, "please enter contact number"],
  },
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
  },
  profileImg: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Buyer", buyerSchema);
