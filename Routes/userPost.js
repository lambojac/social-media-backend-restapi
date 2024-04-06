import express from 'express';
import userPost from '../Controllers/userPost.js';
const router = express.Router();
//Routes
router.post('/', userPost);
export default router; 
