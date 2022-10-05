const mongoose = require("mongoose");

const recipientSchema = mongoose.Schema(
  {
    recipientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farmer'
    },
    messageId: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Message'
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Recipient", recipientSchema);
