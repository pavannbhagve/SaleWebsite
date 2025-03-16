require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// ✅ Check if port is correct
console.log("Server will run on PORT:", PORT);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Sample route to check if server works
app.get("/", (req, res) => {
    res.send("Server is Running");
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
