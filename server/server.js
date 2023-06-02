import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
// import connectDB from "./config/connectDB";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auths.js";
import tweetRoutes from "./routes/tweets.js";

const app = express();

// dotenv config
dotenv.config();

// connect database
// connectDB();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongoose is Running , ${mongoose.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

// middlewares
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
// auth routes
app.use("/api/v1/auth", authRoutes);
// user routes
app.use("/api/v1/users", userRoutes);
// tweet routes
app.use("/api/v1/tweets", tweetRoutes);

// PORT
const PORT = process.env.PORT || 8000;

// Listen
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is Running`);
});
