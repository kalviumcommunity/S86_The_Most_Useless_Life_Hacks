const mongoose = require("mongoose");

const shippingAddressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, required: true }
});

module.exports = mongoose.model("ShippingAddress", shippingAddressSchema);
