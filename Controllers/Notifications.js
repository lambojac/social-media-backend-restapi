import Notification from '../Models/Notifications.js'

const createNotification = async (req, res) => {
    const { recipient_id, action_type, action_data } = req.body;
  
    try {
      const notification = new Notification({ recipient_id, action_type, action_data });
      await notification.save();
  
      // Emit notification event to recipient via WebSocket
    //   io.to(recipient_id).emit('new_notification', notification);
  
      res.status(200).json({ message: 'Notification triggered successfully' });
    } catch (error) {
      console.error('Error triggering notification:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  
  // Express route for retrieving notifications
   const getNotification = async (req, res) => {
    const { recipient_id } = req.params;
  
    try {
      const notifications = await Notification.find({ recipient_id });
      res.status(200).json(notifications);
    } catch (error) {
      console.error('Error retrieving notifications:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
export {createNotification, getNotification}