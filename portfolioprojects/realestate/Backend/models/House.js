// models/House.js

const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    amenities: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    street: { type: String, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    size: { type: Number, required: true },
    category: { type: String, enum: ["for sale", "rent"], required: true },
    yearBuilt: { type: Number, required: true },
    agent: { type: String, required: true },
    agentemail: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("House", houseSchema);
