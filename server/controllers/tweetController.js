import tweetModel from "../models/tweetModel";
import userModel from "../models/userModel";

const createTweet = async (req, res) => {
  const newTweet = new tweetModel(req.body);
  try {
    const savedTweet = await newTweet.save();

    res.status(200).send({
      success: true,
      message: `Successfully Tweeted`,
      savedTweet,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error while Tweeting`,
      error,
    });
  }
};
const deleteTweet = async (req, res) => {
  try {
    const tweet = await tweetModel.findById(req.params.id);
    if (tweet.userId === req.body.id) {
      await tweet.deleteOne();
      res.status(200).send({
        success: true,
        message: `Tweet has been Deleted`,
      });
    } else {
      console.log(error);
      res.status(500).send({
        success: false,
        message: `Error while deleting Tweet`,
        error,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Error while deleting Tweet`,
      error,
    });
  }
};
const likeOrDislike = () => {};
const getAllTweets = () => {};
const getUserTweets = () => {};
const getExploreTweets = () => {};

module.exports = {
  createTweet,
  deleteTweet,
  likeOrDislike,
  getAllTweets,
  getExploreTweets,
  getUserTweets,
};
