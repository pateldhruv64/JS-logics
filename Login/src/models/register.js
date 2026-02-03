const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, 
    },
    number: {
      type: Number,
      required: true,
      // length:10,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Register", userSchema);
