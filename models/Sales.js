const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
    category: { type: String, required: true }, // Quotation, Payment, etc.
    details: { type: String, required: true },
    status: { type: String, enum: ["Pending", "In Progress", "Completed"], default: "Pending" },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Sales", salesSchema);
