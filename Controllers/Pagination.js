import User from "../Models/User.js"
import Post from "../Models/Post.js"
// Route to fetch personalized feed for a user with pagination
 const Paginated=async (req, res) => {
    try {
        const { userId } = req.params;
        const { page = 1, pageSize = 10 } = req.query; // Default page and pageSize

        // Get user's following list
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Find total count of posts from users the current user is following
        const totalCount = await Post.countDocuments({ user: { $in: user.following } });

        // Find posts from users the current user is following with pagination
        const followingPosts = await Post.find({ user: { $in: user.following } })
            .populate('user').select("-password")
            .sort({ createdAt: -1 }) // Sort by createdAt descending
            .skip((page - 1) * pageSize)
            .limit(parseInt(pageSize));

        res.status(200).json({
            totalItems: totalCount,
            currentPage: page,
            pageSize: pageSize,
            totalPages: Math.ceil(totalCount / pageSize),
            feed: followingPosts
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}
export default Paginated


