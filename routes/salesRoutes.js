const express = require("express");
const Sales = require("../models/Sales");

const router = express.Router();

// Get all sales records
router.get("/", async (req, res) => {
    const sales = await Sales.find();
    res.json(sales);
});

// Add a new sales record
router.post("/", async (req, res) => {
    const newSale = new Sales(req.body);
    await newSale.save();
    res.json({ message: "Record Added", sale: newSale });
});

// Update status
router.put("/:id", async (req, res) => {
    const { status } = req.body;
    await Sales.findByIdAndUpdate(req.params.id, { status, updatedAt: Date.now() });
    res.json({ message: "Status Updated" });
});

module.exports = router;
