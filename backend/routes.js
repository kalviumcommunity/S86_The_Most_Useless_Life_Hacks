const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const Entity = require("./models/entity");

// Test route
router.get("/", (req, res) => {
  res.send("Hello from ASAP App");
});

// Add entity with validation
router.post(
  "/api/entities",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("type").notEmpty().withMessage("Type is required")
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, type } = req.body;
      const newEntity = new Entity({ name, type });
      const savedEntity = await newEntity.save();
      res.status(201).json(savedEntity);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error saving entity" });
    }
  }
);

// Get all entities
router.get("/api/entities", async (req, res) => {
  try {
    const entities = await Entity.find();
    res.status(200).json(entities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching entities" });
  }
});

// Get single entity by ID
router.get("/api/entities/:id", async (req, res) => {
  try {
    const entity = await Entity.findById(req.params.id);
    res.status(200).json(entity);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching entity" });
  }
});

// Update entity
router.put("/api/entities/:id", async (req, res) => {
  try {
    const { name, type } = req.body;
    const updated = await Entity.findByIdAndUpdate(
      req.params.id,
      { name, type },
      { new: true }
    );
    res.status(200).json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating entity" });
  }
});

// Delete entity
router.delete("/api/entities/:id", async (req, res) => {
  try {
    await Entity.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting entity" });
  }
});

module.exports = router;
