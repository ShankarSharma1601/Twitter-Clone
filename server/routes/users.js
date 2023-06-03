import express from "express";
import {
  deleteUser,
  follow,
  getUser,
  unfollow,
  updated,
  imageUploadController,
} from "../controllers/userController.js";
import { verifyToken } from "../verifyToken.js";
const router = express.Router();

// Delete User
router.delete("/:id", verifyToken, deleteUser);

// update User
router.put("/:id", verifyToken, updated);

// Get User
router.get("/find/:id", getUser);

// Follow
router.put("/follow/:id", verifyToken, follow);

// Unfollow
router.put("/unfollow/:id", verifyToken, unfollow);

// Image upload
router.put("/imageUpload/:id", verifyToken, imageUploadController);

export default router;
