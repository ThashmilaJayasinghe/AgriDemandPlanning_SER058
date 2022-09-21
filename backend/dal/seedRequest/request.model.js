const mongoose = require("mongoose");

const seedRequestSchema = mongoose.Schema(
  {
    farmerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farmer'
    },

    category: {
      type: String,
      require: [true, "Please select category"],
    },
    type: {
      type: String,
      require: [true, "Please select type"],
    },
    sizeOfLand: {
      type: Number,
      require: [true, "Please add size of the land"],
    },
    weight: {
      type: Number,
      require: [true, "Please enter weight in kilograms"],
    },
    location: {
      type: String,
      require: [false, "Please enter location of the land"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SeedRequest", seedRequestSchema);
