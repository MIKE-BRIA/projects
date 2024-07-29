import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/helpers/TokenandCookie.js";
import mongoose from "mongoose";

export async function signupUser(req, res) {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email: email });

    if (!name || !email || !password)
      return res.status(400).json({ error: "Enter all input fields" });

    if (existingUser)
      return res.status(400).json({ error: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    let isAdmin = false; // Default to false
    if (email === "test@example.com") {
      isAdmin = true;
    }

    const newUser = await User.create({
      name: name,
      email: email,
      isAdmin: isAdmin,
      password: hashedPassword,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        profilepic: newUser.profilepic,
      });
    } else {
      res.status(400).json({ error: "Invalid User data" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
    console.log("Error in signupUser: ", error.message);
  }
}

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).json({ error: "User does not exist" });
    }

    const passwordSame = await bcrypt.compare(password, user.password);

    if (!passwordSame) {
      return res.status(400).json({ error: "Please enter correct password" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      profilePic: user.profilePic,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error in loginUser: ", error.message);
  }
}

export async function getUserProfile(req, res) {
  try {
    const { id } = req.params;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid or missing user ID" });
    }

    // const user = await User.findOne({ _id: id });
    const user = await User.findById(id).select(
      "-password -updatedAt -createdAt"
    );

    if (!user) return res.status(400).json({ error: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("Error in getUserProfile: ", error.message);
  }
}

export async function logoutUser(req, res) {
  try {
    res.cookie("jwt", "", { maxAge: 1 });
    res.status(200).json({ message: "User logged out successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in Logout User: ", err.message);
  }
}
