import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const followers=mongoose.model("follower",userSchema)

export default followers
