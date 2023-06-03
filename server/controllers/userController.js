import { handleError } from "../error.js";
import userModel from "../models/userModel.js";
import tweetModel from "../models/tweetModel.js";

export const getUser = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const updated = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await userModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  } else {
    return next(createError(403, "You can update only your account"));
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await userModel.findByIdAndDelete(req.params.id);
      await tweetModel.remove({ userId: req.params.id });
      res.status(200).json("User deleted");
    } catch (error) {
      next(error);
    }
  } else {
    return next(handleError(403, "You can only delete your own account"));
  }
};
export const follow = async (req, res, next) => {
  try {
    //user
    const user = await userModel.findById(req.params.id);
    //current user
    const currentUser = await userModel.findById(req.body.id);

    if (!user.followers.includes(req.body.id)) {
      await user.updateOne({
        $push: { followers: req.body.id },
      });

      await currentUser.updateOne({ $push: { following: req.params.id } });
    } else {
      res.status(403).json("you already follow this user");
    }
    res.status(200).json("following the user");
  } catch (err) {
    next(err);
  }
};
export const unfollow = async (req, res, next) => {
  try {
    //user
    const user = await userModel.findById(req.params.id);
    //current user
    const currentUser = await userModel.findById(req.body.id);

    if (currentUser.following.includes(req.params.id)) {
      await user.updateOne({
        $pull: { followers: req.body.id },
      });

      await currentUser.updateOne({ $pull: { following: req.params.id } });
    } else {
      res.status(403).json("you are not following this user");
    }
    res.status(200).json("unfollowing the user");
  } catch (err) {
    next(err);
  }
};

export const imageUploadController = async (req, res, next) => {
  try {
    // user
    const user = await userModel.findByIdAndUpdate(req.params.id);
    user.profilePicture = req.body;
    await user.save();
    res.status(200).json("Image Upload Successfully");
  } catch (error) {
    next(error);
  }
};
