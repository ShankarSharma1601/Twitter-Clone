const mongoose = require("mongoose");

// user Schema
const userSchema = new mongoose.Schema(
  {
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
    profile: {
      type: String,
    },
    followers: {
      type: Array,
      defaultValue: [],
    },
    following: {
      type: Array,
      defaultValue: [],
    },
    description: {
      type: String,
    },
    profilePicture: {
      type: String,
    },
  },
  { timeStamps: true }
);

// model
const userModel = mongoose.model("User", userSchema);

// export
module.exports = userModel;
