const express = require("express");
const cors = require("cors");
require("./db/connection");
const User = require("./Models/User");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    const result = await user.save();
    res.status(201).send(result);
    console.log("Data saved successfully");
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).send({ error: "Failed to save data" });
  }
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
