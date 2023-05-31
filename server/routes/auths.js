const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/authController");
const router = express.Router();

// Routers
// POST || Login
router.post("/login", loginController);

// POST || Register
router.post("/register", registerController);

module.exports = router;
