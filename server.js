import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import http from "http";
import {Server} from "socket.io";
import connectDB from "./Config/db.js";
import errorHandler from "./Middleware/errorMiddleware.js";
import RegisterUser from "./Routes/RegisterUser.js";
import userPost from "./Controllers/userPost.js";
import followUser from "./Routes/Follow.js";
import seePost from "./Routes/seePost.js";
import Pagination from "./Routes/Pagination.js";
import CommentAndLikes from "./Routes/CommentAndLikes.js";
import Notifications from './Models/Notifications.js'
import numberofLikesAndComment from "./Routes/numberOfLikesAndComment.js";
import Notification from "./Routes/Notifications.js";
// Initialize Express app
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Load environment variables from .env file
dotenv.config();

// Define the port
const PORT = process.env.PORT || 3000;

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use("/api/users", RegisterUser);
app.use("/api/post", userPost);
app.use("/api/follow", followUser);
app.use("/api/feed", seePost);
app.use("/pagination", Pagination);
app.use("/post", CommentAndLikes);
app.use("/feed", numberofLikesAndComment);
app.use("/",Notification)

// Default route
app.get("/", (req, res) => {
  res.send("Home Page!");
});

// Error handling middleware
app.use(errorHandler);

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

// Socket.IO connection handling
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
  
  socket.on("mark_as_seen", async (notificationId) => {
    try {
        const notification = await Notifications.findById(notificationId);
        if (notification) {
          notification.seen = true;
          await notification.save();
    } 
}catch (error) {
      console.error("Error marking notification as seen:", error);
    }
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});
