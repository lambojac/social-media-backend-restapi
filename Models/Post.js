import mongoose from "mongoose"
const postSchema = new mongoose.Schema({
    text: String,
    attachment: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ text: String, user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } }]
});
const Post=mongoose.model('Post', postSchema) 
export default Post