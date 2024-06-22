const mongooseConnect = require("../data/mongoose");
const Agent = require("../models/Agent");

//!creating a new instance of Agent
async function createNewAgent(req, res, next) {
  try {
    await mongooseConnect();

    const { name, email, phoneNumber } = req.body;

    if (!name || !email || !phoneNumber) {
      return res
        .status(400)
        .json({ message: "All fields are required to Add New Agent" });
    }

    const newAgent = await Agent.create({
      name,
      email,
      phoneNumber,
    });

    res
      .status(201)
      .json({ message: "Agent created successfully", agent: newAgent });
  } catch (error) {
    console.error("Error creating Agent:", error);

    res
      .status(500)
      .json({ message: "Failed to create a new agent", error: error.message });
  }
}

//!getting all Agents documents
async function getAllAgent(req, res, next) {
  try {
    await mongooseConnect();

    const agents = await Agent.find();

    res.json({ message: "Data fetched successfully", agent: agents });
  } catch (error) {
    console.error("Error fetching agents:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch agents", error: error.message });
  }
}

//!deleting agent data by id
async function deleteAgent(req, res, next) {
  try {
    await mongooseConnect();
    const { agentId } = req.params;
    const deletedAgent = await Agent.findByIdAndDelete(agentId);
    if (!deletedAgent) {
      return res.status(404).json({ error: "House not found" });
    }
    res.json({ message: "House deleted successfully", deletedHouse });
  } catch (error) {
    console.error("Error deleting house:", error);
    res.status(500).json({ error: "Server error" });
  }
}

module.exports = {
  createNewAgent,
  getAllAgent,
  deleteAgent,
};
