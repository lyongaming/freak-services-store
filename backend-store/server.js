// Reads config file
require("dotenv").config();

// imports
const express = require("express");
const serviceRoutes = require("./src/routes/ServiceRoutes");
const userRoutes = require("./src/routes/UserRoutes");

const app = express();

app.use(express.json());

app.use("/services", serviceRoutes);
app.use("/users", userRoutes);

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => console.log(`Connected to port ${PORT}`));