// Reads config file
// require("dotenv")();

// Starts app
const express = require("express");
const app = express();

// Middlewares

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Connected to port ${PORT}`);
});