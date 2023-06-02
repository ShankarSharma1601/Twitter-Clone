import express from "express";
import {
  createTweet,
  deleteTweet,
  likeOrDislike,
  getAllTweets,
  getUserTweets,
  getExploreTweets,
} from "../controllers/tweetController.js";
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
router.get("/explore", getExploreTweets);

export default router;
