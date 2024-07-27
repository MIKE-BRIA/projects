import express from "express";
import mongooseConnect from "./db/connectDB.js";
import dotenv from "dotenv";

dotenv.config();

mongooseConnect();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
