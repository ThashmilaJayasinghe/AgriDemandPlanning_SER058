const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    subject: {
        type: String,
        require: [true, "Please add subject"],
    },
    creatorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farmer',
        require: [true, "Please add id of creator"],
    },
    messageBody: {
      type: String,
      require: [true, "Please add message"],
    },
    parentMessageId: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Message'
    },
    status: {
       type: String,
       require: [false, "Please add status"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Message", messageSchema);
