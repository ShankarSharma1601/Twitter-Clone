import tweetModel from "../models/tweetModel.js";
import { handleError } from "../error.js";
import userModel from "../models/userModel.js";

export const createTweet = async (req, res, next) => {
  const newTweet = new tweetModel(req.body);
  try {
    const savedTweet = await newTweet.save();

    res.status(200).json(savedTweet);
  } catch (error) {
    console.log(error);
    handleError(500, error);
  }
};
export const deleteTweet = async (req, res, next) => {
  try {
    const tweet = await tweetModel.findById(req.params.id);
    if (tweet.userId === req.body.id) {
      await tweet.deleteOne();
      res.status(200).json("tweet has been deleted");
    } else {
      console.log(error);
      handleError(500, error);
    }
  } catch (error) {
    console.log(error);
    handleError(500, error);
  }
};
export const likeOrDislike = async (req, res, next) => {
  try {
    const tweet = await tweetModel.findById(req.params.id);
    if (!tweet.likes.includes(req.body.id)) {
      await tweet.updateOne({ $push: { likes: req.body.id } });
      res.status(200).json("tweet has been liked");
    } else {
      await tweet.updateOne({ $pull: { likes: req.body.id } });
      res.status(200).json("tweet has been disliked");
    }
  } catch (error) {
    handleError(500, error);
  }
};
export const getAllTweets = async (req, res, next) => {
  try {
    const currentUser = await userModel.findById(req.params.id);
    const userTweets = await tweetModel.find({ userId: currentUser._id });
    const followersTweets = await Promise.all(
      currentUser.following.map((followerId) => {
        return tweetModel.find({ userId: followerId });
      })
    );

    res.status(200).json(userTweets.concat(...followersTweets));
  } catch (error) {
    handleError(500, error);
  }
};
export const getUserTweets = async (req, res, next) => {
  try {
    const userTweets = await tweetModel.find({ userId: req.params.id }).sort({
      createAt: -1,
    });

    res.status(200).json(userTweets);
  } catch (error) {
    handleError(500, error);
  }
};
export const getExploreTweets = async (req, res, next) => {
  try {
    const getExploreTweets = await tweetModel
      .find({
        likes: { $exists: true },
      })
      .sort({ likes: -1 });

    res.status(200).json(getExploreTweets);
  } catch (error) {
    handleError(500, error);
  }
};
