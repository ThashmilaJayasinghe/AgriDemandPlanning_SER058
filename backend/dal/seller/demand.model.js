const mongoose = require("mongoose");

const demandSchema = mongoose.Schema({
  buyerID: {
    type: String,
  },
  demands: [
    {
      category: {
        type: String,
        require: [true, "Please select category"],
      },
      type: {
        type: String,
        require: [true, "Please select type"],
      },
      sellings: {
        type: Number,
        require: [true, "Please add sellings for a year"],
      },
      unitPrice: {
        type: Number,
        require: [true, "Please enter unit price"],
      },
      remarks: {
        type: String,
        require: [false, "Please add remarks if any"],
      },
    },
  ],
});

module.exports = mongoose.model("Demand", demandSchema);
