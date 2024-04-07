import cors from  "cors";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB  from "./Config/db.js";
import RegisterUser from "./Routes/RegisterUser.js";
import errorHandler from "./Middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";
import userPost from "./Controllers/userPost.js";
import followUser  from "./Routes/Follow.js";
import seePost from "./Routes/seePost.js";
import Pagination from "./Routes/Pagination.js"
import CommentAndLikes from "./Routes/CommentAndLikes.js";
const app = express();
dotenv.config();
const PORT = process.env.PORT;

//connect to db
connectDB();

//app middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

// routes middleware
app.use("/api/users", RegisterUser);
app.use("/api/post", userPost);
app.use("/api/follow",followUser)
app.use("/api/feed",seePost)
app.use("/pagination",Pagination)
app.use("/post", CommentAndLikes)
//route
app.get("/", (req, res) => {
    res.send("Home Page!");
});

//error handler
app.use(errorHandler);
//start server
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });
