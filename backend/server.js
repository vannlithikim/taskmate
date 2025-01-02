const express = require("express");
const axios = require("axios");
const cors = require("cors"); // Import cors package

const app = express();
const PORT = 3000; // Your backend server port

const DIRECTUS_API_URL = "http://localhost:8055"; // Directus API URL
const API_KEY = "ktLgvALkZDl5iCa7H-iRO-9gft3yh2Zn"; // Your Directus admin API key

// Middleware to parse JSON
app.use(express.json());

// Apply CORS middleware globally **before** route definitions
app.use(cors()); // Allow all origins (or set specific origins if needed)

// Alternatively, to restrict to a specific origin (uncomment if needed):
// app.use(cors({ origin: 'http://localhost:5173' }));

// Route to fetch data from Directus
app.get("/api/get-data", async (req, res) => {
  try {
    const response = await axios.get(`${DIRECTUS_API_URL}/items/test`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from Directus:", error);
    res.status(500).json({ message: "Error fetching data from Directus" });
  }
});

// Route to create an item in Directus
app.post("/api/create-item", async (req, res) => {
  try {
    const newItem = req.body; // Data from the request body

    const response = await axios.post(
      `${DIRECTUS_API_URL}/items/test`, // Replace 'test' with your actual collection
      newItem,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    res.status(201).json(response.data);
  } catch (error) {
    console.error("Error creating item in Directus:", error);
    res.status(500).json({ message: "Error creating item in Directus" });
  }
});

// Route to delete a task
app.delete("/api/delete-item/:id", async (req, res) => {
  const taskId = req.params.id;
  try {
    // Delete task from Directus
    const response = await axios.delete(
      `${DIRECTUS_API_URL}/items/test/${taskId}`,
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Error deleting task" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
