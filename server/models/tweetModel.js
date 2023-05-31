const mongoose = require("mongoose");

// tweet Schema
const tweetSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      max: 300,
    },
    likes: {
      type: Array,
      defaultValue: [],
    },
  },
  { timeStamps: true }
);

// model
const tweetModel = mongoose.model("Tweet", tweetSchema);

// export
module.exports = tweetModel;
