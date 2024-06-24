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

    if (password < 6 || !email.includes("@")) {
      return res.status(400).json({ message: "invalid inputs" });
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
    await mongooseConnect();

    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(401)
        .json({ message: "All input fields are required to log you in" });
    }

    if (password < 6 || !email.includes("@")) {
      return res.status(401).json({ message: "invalid inputs" });
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res
        .status(401)
        .json({ message: "this email does not have an account with us" });
    }

    const passwordsame = await bcrypt.compare(password, existingUser.password);

    if (!passwordsame) {
      return res
        .status(401)
        .json({ message: "You have entered wrong password" });
    }

    res.status(201).json({ message: "User login successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(500)
      .json({ message: "Failed to create a new user", error: error.message });
  }
}

module.exports = {
  createNewUser,
  loginUser,
};
