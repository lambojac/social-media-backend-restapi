import express from 'express';
import numberofLikesAndComment from '../Controllers/numberOfLikesAndComment.js';
const router = express.Router();
//Routes
router.get("/:userId",numberofLikesAndComment);
export default router; 
