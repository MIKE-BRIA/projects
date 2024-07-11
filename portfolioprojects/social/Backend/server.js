import express from "express";
import dotenv from "dotenv";
import mongooseConnect from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/post.routes.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();
mongooseConnect();
const app = express();

//!connecting to cloudinary for image uploads
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//!middleware
app.use(express.json({ limit: "50mb" })); //to parse json data in the req.body
app.use(express.urlencoded({ limit: "50mb", extended: true })); //to parse form data in the req.body
app.use(cookieParser()); //

//!Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

let PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`server started at http://localhost:${PORT}`)
);
