// Reads config file
require("dotenv").config();

// Starts app
const express = require("express");
const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Connected to port ${PORT}`));