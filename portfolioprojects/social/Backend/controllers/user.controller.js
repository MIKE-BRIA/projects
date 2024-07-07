import User from "../models/userModel.js";
import brcypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/helpers/generateTokenAndSetCookie.js";

//!Signup user
export async function signupUser(req, res) {
  try {
    const { name, email, password, username } = req.body;
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await brcypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      username,
      password: hashedPassword,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        username: newUser.username,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in signupUser: ", err.message);
  }
}

//!Login User
export async function loginUser(req, res) {
  try {
    const { password, username } = req.body;
    const user = await User.findOne({ username });

    const isPasswordCorrect = await brcypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect)
      return res.status(400).json({ message: "Invalid username or password" });

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      username: user.username,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in loginUser: ", err.message);
  }
}

//!Logout User
export async function logoutUser(req, res) {
  try {
    res.cookie("jwt", "", { maxAge: 1 });
    res.status(200).json({ message: "User logged out successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in Logout User: ", err.message);
  }
}

//!Follow and Unfollow User
export async function followUnfollowUser(req, res) {
  try {
    const { id } = req.params;
    //*the person that the current account owner wants to follow/unfollow
    const userToFollow = await User.findById(id);
    //*the owner of the current account that is on use
    const currentUser = await User.findById(req.user._id);

    if (id === req.user._id.toString())
      return res
        .status(400)
        .json({ message: "You cannot follow/Unfollow yourself" });

    if (!userToFollow || !currentUser)
      return res.status(400).json({ message: "User not found" });

    const isFollowing = currentUser.following.includes(id);

    if (isFollowing) {
      //*unfollow user
      //*Modify current user following , modify followers of userToFollow
      await User.findByIdAndUpdate(req.user._id, { $pull: { following: id } }); //finding current user and deleting followed user from following array
      await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id } }); //finding followed account and removing current account from followers array
      res.status(200).json({ message: "User unfollowed successfully" });
    } else {
      //*Follow user
      await User.findByIdAndUpdate(req.user._id, { $push: { following: id } });
      await User.findByIdAndUpdate(id, { $push: { followers: req.user._id } });
      res.status(200).json({ message: "User followed successfully" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in followUnfollowUser: ", err.message);
  }
}

//!Update User Profile
export async function updateUser(req, res) {
  const { name, email, username, password, profilePic, bio } = req.body;
  const userId = req.user._id;
  try {
    let user = await User.findById(userId);

    if (!user) return res.status(400).json({ message: "User not found" });

    if (req.params.id !== userId.toString())
      return res
        .status(400)
        .json({ message: "You cannot update other user's Profile" });

    if (password) {
      const hashedPassword = await brcypt.hash(password, 10);
      user.password = hashedPassword;
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.username = username || user.username;
    user.profilePic = profilePic || user.profilePic;
    user.bio = bio || user.bio;

    user = await user.save();

    res.status(200).json({ message: "Profile updated successfully", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in updateUser: ", err.message);
  }
}
