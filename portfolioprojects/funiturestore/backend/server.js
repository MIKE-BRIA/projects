import express from "express";
import mongooseConnect from "./db/connectDB.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import UserRoutes from "./routes/user.routes.js";
import ProductRoutes from "./routes/product.routes.js";

dotenv.config();

mongooseConnect();

const app = express();
const port = 3000;

//!middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

//!Routes
app.use("/api/users", UserRoutes);
app.use("/api/products", ProductRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
