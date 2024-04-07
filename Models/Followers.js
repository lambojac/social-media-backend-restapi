import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const Followers = mongoose.model("Followers", userSchema); // Use "Followers" instead of "follower"

export default Followers; // Export the model
