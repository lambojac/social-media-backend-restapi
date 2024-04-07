import seePost from '../Controllers/Pagination.js';
import express from "express"
const router = express.Router();
//Routes
router.get('/feed/:userId', seePost);
export default router; 
