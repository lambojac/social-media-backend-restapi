import User from "../Models/User.js"
import Post from "../Models/Post.js"
const seePost=async (req, res) => {
    try {
        const { userId } = req.params;

        // Get user's following list
        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Find posts from users the current user is following
        const followingPosts = await Post.find({ user: { $in: user.following } }).populate('Post')
        
        res.status(200).json({ feed: followingPosts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}
export default seePost


