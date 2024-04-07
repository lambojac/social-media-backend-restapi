import followersModel from "../Models/Followers.js"; // Correct import statement
import User from "../Models/User.js";
import asyncHandler from 'express-async-handler';

const followUsers = asyncHandler(async (req, res) => {
  const userId = req.params.userId; 
  console.log("userId:", userId);
  const followUserId = req.body.followUserId; 
  console.log("followUserId:", followUserId);

  try {
    // Check if user exists
    const user = await User.findById(userId).populate('following', 'username');
    console.log(user)
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if follow user exists
    const followUser = await User.findById(followUserId).populate('followers', 'username');
    if (!followUser) {
      return res.status(404).json({ message: "User to follow not found" });
    }

    // Check if already following
    if (user.following.includes(followUserId)) {
      return res.status(400).json({ message: "Already following this user" });
    }

    // Add follow user to following list
    user.following.push(followUserId);
    await user.save();

    // Add user to follow user's followers list
    followUser.followers.push(userId);
    await followUser.save();

    res.status(200).json({ message: "User followed successfully", user: user.toJSON(), followUser: followUser.toJSON() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default followUsers; // Export the controller function
