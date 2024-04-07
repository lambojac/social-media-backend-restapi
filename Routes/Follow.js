import followUser from '../Controllers/Follow.js';
import express from "express"
const router = express.Router();
//Routes
router.post('/:userId', followUser);
// router.post('/users/:userId/unfollow', userPost);
export default router; 
