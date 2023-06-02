import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/authController.js";
const router = express.Router();

// Routers
// POST || Login
router.post("/login", loginController);

// POST || Register
router.post("/register", registerController);

export default router;
