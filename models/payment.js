const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
  paymentMethod: { type: String, enum: ["Credit Card", "PayPal", "Bank Transfer"], required: true },
  status: { type: String, enum: ["Pending", "Completed", "Failed"], default: "Pending" },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Payment", paymentSchema);
