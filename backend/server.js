const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
require("dotenv").config(); // make sure this is at the top

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", routes); // plug in the routes

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("DB connection error:", err));

app.listen(5000, () => console.log("Server started on port 5000"));
