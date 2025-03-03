const mongoose = require("mongoose");

const supportTicketSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  issueType: { type: String, required: true },
  status: { type: String, enum: ["Open", "In Progress", "Resolved"], default: "Open" },
  openedAt: { type: Date, default: Date.now },
  resolvedAt: { type: Date, default: null }
});

module.exports = mongoose.model("SupportTicket", supportTicketSchema);
