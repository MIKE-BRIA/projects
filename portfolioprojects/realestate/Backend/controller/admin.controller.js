const mongooseConnect = require("../data/mongoose");
const House = require("../models/House");
const fs = require("fs/promises");
const path = require("path");

//!creating a new instance of house
async function createNewHouse(req, res, next) {
  try {
    await mongooseConnect();

    const {
      title,
      amenities,
      country,
      state,
      street,
      bedrooms,
      bathrooms,
      size,
      category,
      yearBuilt,
      agent,
      agentemail,
      price,
      description,
    } = req.body;

    if (!title || !description || !price || !category) {
      return res
        .status(400)
        .json({ message: "All fields are required to Add New House" });
    }

    const newHouse = await House.create({
      title,
      amenities,
      country,
      state,
      street,
      bedrooms,
      bathrooms,
      size,
      category,
      yearBuilt,
      agent,
      agentemail,
      price,
      description,
    });

    res
      .status(201)
      .json({ message: "House created successfully", house: newHouse });
  } catch (error) {
    console.error("Error creating house:", error);

    res
      .status(500)
      .json({ message: "Failed to create a new house", error: error.message });
  }
}

//!getting all house documents
async function getNewHouse(req, res, next) {
  try {
    await mongooseConnect();

    const houses = await House.find();

    res.json({ message: "Data fetched successfully", houses: houses });
  } catch (error) {
    console.error("Error fetching houses:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch houses", error: error.message });
  }
}

//!deleting house data by id
async function deleteNewHouse(req, res, next) {
  await mongooseConnect();
  try {
    const { houseId } = req.params;

    const deletedHouse = await House.findByIdAndDelete(houseId);

    if (!deletedHouse) {
      return res.status(404).json({ error: "House not found" });
    }

    res.json({ message: "House deleted successfully", deletedHouse });
  } catch (error) {
    console.error("Error deleting house:", error);
    res.status(500).json({ error: "Server error" });
  }
}

//!getting house data by id
async function getHouseByID(req, res, next) {
  await mongooseConnect();

  const { houseId } = req.params;

  try {
    const house = await House.findById(houseId);
    if (!house) {
      return res.status(404).json({ error: "House not found" });
    }
    res.json(house);
  } catch (error) {
    console.error("Error retrieving house:", error);
    res.status(500).json({ error: "Server error" });
  }
}

//!upating already existing house data
async function updateHouse(req, res, next) {
  await mongooseConnect();

  try {
    const {
      title,
      amenities,
      country,
      state,
      street,
      bedrooms,
      bathrooms,
      size,
      category,
      yearBuilt,
      agent,
      agentemail,
      price,
      description,
    } = req.body;

    if (!title || !description || !price || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const houseId = req.params.houseId;

    await House.updateOne(
      { _id: houseId },
      {
        title,
        amenities,
        country,
        state,
        street,
        bedrooms,
        bathrooms,
        size,
        category,
        yearBuilt,
        agent,
        agentemail,
        price,
        description,
      }
    );

    res.status(201).json({ message: "House updated successfully" });
  } catch (err) {
    console.log(err);
  }
}

//!adding images
async function addImage(req, res, next) {
  try {
    const formData = await req.formData();

    // Check if the file exists in the form data
    if (!formData.has("file")) {
      return res.status(400).json({ message: "File is required" });
    }

    const file = formData.get("file");

    if (!file) {
      return res.status(400).json({ message: "Invalid file format" });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    const fileName = file.name;
    const extension = fileName.split(".").pop();
    const filename = `${Date.now()}.${extension}`;

    // Ensure the uploads directory exists
    const uploadDir = path.resolve(__dirname, "../public/uploads");
    await fs.mkdir(uploadDir, { recursive: true });

    const uploadPath = path.join(uploadDir, filename);
    await fs.writeFile(uploadPath, buffer);

    const link = `/uploads/${filename}`;
    res.status(200).json({ links: [link] });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ error: "Server error", details: error.message });
  }
}

module.exports = {
  createNewHouse,
  getNewHouse,
  deleteNewHouse,
  getHouseByID,
  updateHouse,
  addImage,
};
