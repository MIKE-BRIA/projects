const express = require("express");
require("dotenv").config();
const mongooseConnect = require("./data/mongoose");
const cors = require("cors");
const adminRoutes = require("./routes/admin.routes");
const agentRoutes = require("./routes/agent.routes");

const app = express();

// Middleware to parse incoming JSON requests
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the admin routes
app.use(adminRoutes);
app.use(agentRoutes);

let port = 3000;
if (process.env.PORT) {
  port = process.env.PORT;
}

mongooseConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database!");
    console.error(error);
  });
