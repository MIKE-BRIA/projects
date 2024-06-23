const bcrypt = require("bcryptjs");
const User = require("../models/User");
const mongooseConnect = require("../data/mongoose");

//!creating a new user at signup
async function createNewUser(req, res, next) {
  try {
    await mongooseConnect();

    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res
        .status(400)
        .json({ message: "All fields are required to create a new user" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(500)
      .json({ message: "Failed to create a new user", error: error.message });
  }
}

//!user login functionality
async function loginUser(req, res, next) {
  try {
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(500)
      .json({ message: "Failed to create a new user", error: error.message });
  }
}

module.exports = {
  createNewUser,
};
