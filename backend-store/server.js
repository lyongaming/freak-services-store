// Reads config file
require("dotenv").config();

// imports
const express = require("express");
const serviceRoutes = require("./src/routes/ServiceRoutes");

const app = express();

app.use(express.json());

app.use("/services", serviceRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Connected to port ${PORT}`));