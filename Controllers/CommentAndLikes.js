import Post from "../Models/Post.js"
// Route for liking a post
 const Like=async (req, res) => {
    try {
        const { postId } = req.params;
        const { userId } = req.body;

        // Check if post exists
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        // Check if user already liked the post
        if (post.likes.includes(userId)) {
            return res.status(400).json({ message: "User already liked this post" });
        }

        // Add user to post's likes
        post.likes.push(userId);
        await post.save();

        res.status(200).json({ message: "Post liked successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}

// Route for commenting on a post
 const Comment=async (req, res) => {
    try {
        const { postId } = req.params;
        const { userId, text } = req.body;

        // Check if post exists
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        // Add comment to post
        post.comments.push({ text, user: userId });
        await post.save();

        res.status(200).json({ message: "Comment added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}
 
export  {Comment, Like}


