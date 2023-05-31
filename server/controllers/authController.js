const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.find({ email, password });
    if (!user) {
      res.status(404).send({
        success: false,
        message: `Invalid Credentials`,
      });
    }
    res.status(200).send({
      success: true,
      message: `Login Successful`,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: `Error while Login`,
      error,
    });
  }
};

const registerController = async (req, res) => {
  try {
    const newUser = userModel(req.body);
    await newUser.save();
    res.status(201).send({
      success: true,
      message: `Register Successful`,
      newUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: `Error while Register`,
      error,
    });
  }
};

module.exports = { loginController, registerController };
