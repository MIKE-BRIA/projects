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

//!Getting Posts
export async function getPost(req, res) {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);

    if (!post) return res.status(404).json({ message: "Post not found" });

    res.status(200).json({ post });
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log(err);
  }
}

//!Delete Post
export async function deletePost(req, res) {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);

    if (!post) return res.status(400).json({ message: "Post not found" });

    if (post.postedBy.toString() !== req.user._id.toString())
      return res.status(401).json({ message: "Unauthorized to delete post" });

    await Post.findByIdAndDelete(id);

    res.status(200).json({ message: "post deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

//!Like and Unlike post
export async function likeUnlikePost(req, res) {
  try {
    const { id: postId } = req.params;
    const userId = req.user._id;

    const post = await Post.findById(postId);

    if (!post) return res.status(404).json({ message: "post not found" });

    const userLikedPost = post.likes.includes(userId);

    if (userLikedPost) {
      //Unlike post
      await Post.updateOne({ _id: postId }, { $pull: { likes: userId } });
      res.status(200).json({ message: "Post unliked successfully" });
    } else {
      //like post
      post.likes.push(userId);
      await post.save();
      res.status(200).json({ message: "Post liked successfully" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

//!Reply to Post
export async function replyToPost(req, res) {
  try {
    const { text } = req.body;
    const postId = req.params.id;
    const userId = req.user._id;
    const userProfilePic = req.user.profilePic;
    const username = req.user.username;

    if (!text)
      return res.status(400).json({ message: "Text field is required" });

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: "Post not found" });

    const reply = { userId, text, userProfilePic, username };

    post.replies.push(reply);
    await post.save();

    res.status(200).json({ message: "reply added successfully", post });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

//!Get feed posts
export async function getFeedPost(req, res) {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ message: "user not found" });

    const following = user.following;

    const feedPosts = await Post.find({
      postedBy: { $in: following },
    }).sort({ createdAt: -1 });

    res.status(200).json({ feedPosts });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}