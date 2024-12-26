const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  age: {
    type: Number,
  },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
