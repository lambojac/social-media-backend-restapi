import Post from "../Models/Post.js";
import asyncHandler from 'express-async-handler';

// Route for creating a new post
const userPost = asyncHandler(async (req, res) => {
  const { text, attachment } = req.body;

  // Create new post
  const newPost = new Post({ text, attachment });
  await newPost.save();

  res.status(201).json({ message: "Post created successfully", post: newPost });
});

export default userPost;