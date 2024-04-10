import {createNotification, getNotification} from '../Controllers/Notifications.js';
import express from "express"
const router = express.Router();
//Routes
router.get('/notifications/:userId', getNotification);
router.post('/notifications',createNotification);
export default router; 
