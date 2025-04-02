require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const API_URL = "http://20.244.56.144/evaluation-service/users";
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

app.use(cors());
app.use(express.json());

// Route to fetch users from external API
app.get("/api/users", async (req, res) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

    console.log("API Response:", response.data); // Log data for debugging
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    
    if (error.response) {
      console.error("Response Data:", error.response.data);
      console.error("Status Code:", error.response.status);
      return res.status(error.response.status).json(error.response.data);
    }
    
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
