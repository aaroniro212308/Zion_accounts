const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImageUrl: {
    type: String,
  },
  userType: {
    type: String,
    enum: ["admin", "userFund","userExpences"],
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
