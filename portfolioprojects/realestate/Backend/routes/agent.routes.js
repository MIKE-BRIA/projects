const express = require("express");
const agentController = require("../controller/agent.controller");

const router = express.Router();

router.post("/agents", agentController.createNewAgent);

router.get("/agents", agentController.getAllAgent);

router.delete("/agents/:agentId", agentController.deleteAgent);

module.exports = router;
