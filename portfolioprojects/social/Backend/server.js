import express from "express";
import dotenv from "dotenv";
import mongooseConnect from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";

dotenv.config();
mongooseConnect();
const app = express();

//!middleware
app.use(express.json()); //to parse json data in the req.body
app.use(express.urlencoded({ extended: true })); //to parse form data in the req.body
app.use(cookieParser()); //

//!Routes
app.use("/api/users", userRoutes);

let PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`server started at http://localhost:${PORT}`)
);
