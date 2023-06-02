import mongoose from "mongoose";

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
  { timestamps: true }
);

// model
const tweetModel = mongoose.model("Tweet", tweetSchema);

// export
export default tweetModel;
