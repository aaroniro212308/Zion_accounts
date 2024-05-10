const mongoose = require("mongoose");

const fundSchema = new mongoose.Schema({
  fundsId: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  receivedBy: {
    type: String,
    required: true,
  },
  fundingMethod: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrls: {
    type: Array,
  },
 
});

const Fund = mongoose.model("Fund", fundSchema);

module.exports = Fund;
