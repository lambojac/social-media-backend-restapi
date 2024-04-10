import mongoose from "mongoose"
const postSchema = new mongoose.Schema({
    text: String,
    attachment: String,
    Post: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ text: String, user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } }]
});
const Post=mongoose.model('Post', postSchema) 
export default Post
