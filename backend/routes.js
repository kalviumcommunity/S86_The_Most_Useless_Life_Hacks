const express = require("express");
const router = express.Router();
const Entity = require("./models/entity"); // <-- Make sure the path is correct

// Test route
router.get("/", (req, res) => {
  res.send("Hello from ASAP App");
});

// POST route to add a new entity
router.post("/api/entities", async (req, res) => {
  try {
    const { name, type } = req.body;
    const newEntity = new Entity({ name, type });
    const savedEntity = await newEntity.save();
    res.status(201).json(savedEntity);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving entity" });
  }
});

// GET route to retrieve all entities
router.get("/api/entities", async (req, res) => {
  try {
    const entities = await Entity.find();
    res.status(200).json(entities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching entities" });
  }
});

module.exports = router;
