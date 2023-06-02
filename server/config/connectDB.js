import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongoose is Running , ${mongoose.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
