require("dotenv").config(); // Load environment variables

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

// Check if MONGO_URI is defined
if (!process.env.MONGO_URI) {
  console.error("❌ Error: MONGO_URI is not defined in .env file!");
  process.exit(1); // Stop the server if no database URI is found
}

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Stop the server if the connection fails
  });

// Root route with database status
app.get("/", (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? "Connected" : "Not Connected";
  res.json({ message: "Welcome to the API!", databaseStatus: dbStatus });
});

// /ping route
app.get("/ping", (req, res) => {
  res.send("pong");
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
