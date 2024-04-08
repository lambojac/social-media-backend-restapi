import User from "../Models/User.js";
import Post from "../Models/Post.js";

const numberofLikesAndComment = async (req, res) => {
    try {
        const { userId } = req.params;
        const { page = 1, pageSize = 10 } = req.query; // Default page and pageSize

        // Get user's by id
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Find total count of posts from users 
        const totalCount = await Post.countDocuments({user});

        // Find posts from users the current user is following with pagination
        const Posts = await Post.find({user})
            .sort({ createdAt: -1 }) // Sort by createdAt descending
            .skip((page - 1) * pageSize)
            .limit(parseInt(pageSize));

        // Get counts of likes and comments for each post
        const postsWithCounts = Posts.map(post => {
            const likesCount = post.likes.length;
            const commentsCount = post.comments.length;
            return { ...post.toObject(), likesCount, commentsCount };
        });

        res.status(200).json({
            totalItems: totalCount,
            currentPage: page,
            pageSize: pageSize,
            totalPages: Math.ceil(totalCount / pageSize),
            feed: postsWithCounts
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

export default numberofLikesAndComment;
