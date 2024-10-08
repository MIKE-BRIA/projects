const express = require("express");
require("dotenv").config();
const mongooseConnect = require("./data/mongoose");
const cors = require("cors");
const adminRoutes = require("./routes/admin.routes");
const agentRoutes = require("./routes/agent.routes");
const userRoutes = require("./routes/user.routes");
const session = require("express-session");
const mongodbStore = require("connect-mongodb-session");

const mongoDBStore = mongodbStore(session);

const app = express();

const sessionStore = new mongoDBStore({
  uri: "mongodb+srv://brianmichaeladero:sundugweno@cluster0.alp9zdo.mongodb.net/RealEstate",
  collection: "sessions",
});

//! Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "this-is-a-session-secret",
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
  })
);

//!Routes
app.use("/api/users", userRoutes);
app.use(adminRoutes);
app.use("/api", agentRoutes);

let PORT = process.env.PORT || 3000;

mongooseConnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database!");
    console.error(error);
  });
