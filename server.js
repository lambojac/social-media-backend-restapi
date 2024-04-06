import cors from  "cors";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB  from "./Config/db.js";
import RegisterUser from "./Routes/RegisterUser.js";
import errorHandler from "./Middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";

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
// app.use("/api/products", productRouter);


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
