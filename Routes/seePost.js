import seePost from '../Controllers/seePost.js';
import express from "express"
const router = express.Router();
//Routes
router.get('/:userId', seePost);
export default router; 
