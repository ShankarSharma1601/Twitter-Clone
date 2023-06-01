const express = require("express");
const {
  createTweet,
  deleteTweet,
  likeOrDislike,
  getAllTweets,
  getUserTweets,
  getExploreTweets,
} = require("../controllers/tweetController");
const router = express.Router();

// Routes
// Create a Tweet
router.post("/", createTweet);

// Delete a Tweet
router.post("/:id", deleteTweet);

// Like or Didlike a Tweet
router.put("/:id/like", likeOrDislike);

// Get all timeline tweets
router.get("/timeline/:id", getAllTweets);

// Get user Tweets only
router.get("/user/all/:id", getUserTweets);

// explore
router.all.get("/explore", getExploreTweets);

module.exports = router;
