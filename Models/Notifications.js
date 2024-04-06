const mongoose=require("mongoose")
const notificationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    type: String,
    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    createdAt: { type: Date, default: Date.now }
});
const Notification = mongoose.model('Notification', notificationSchema)
module.exports=Notification