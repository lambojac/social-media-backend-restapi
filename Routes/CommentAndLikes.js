import { Like } from "../Controllers/CommentAndLikes.js";
import { Comment } from "../Controllers/CommentAndLikes.js";
import express from "express";
const router = express.Router();
//Routes
router.post("/:postId/like", Like);
router.post("/:postId/comment", Comment);
export default router;
