import User from "../models/userModel.js";
import Post from "../models/postModel.js";

//!Creating a post
export async function createPost(req, res) {
  try {
    const { postedBy, text, img } = req.body;

    if (!postedBy || !text)
      return res
        .status(400)
        .json({ message: "PostedBy and text fields are required" });

    const user = await User.findById(postedBy);

    if (!user) return res.status(400).json({ message: "User does not exist" });

    if (user._id.toString() !== req.user._id.toString())
      return res.status(401).json({ message: "Unauthorized to create post" });

    const maxLength = 500;
    if (text.length > maxLength)
      return res
        .status(400)
        .json({ message: `Text must be less than ${maxLength} characters` });

    const newPost = await Post.create({ postedBy, text, img });

    res.status(201).json({ message: "Post created successfully", newPost });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log(err);
  }
}
