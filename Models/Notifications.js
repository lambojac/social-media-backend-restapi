 import mongoose from "mongoose"
const notificationSchema = new mongoose.Schema({
    recipient_id: String,
    action_type: String,
    action_data: mongoose.Schema.Types.Mixed,
    seen: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now }
  });
const Notification = mongoose.model('Notification', notificationSchema);
export default Notification