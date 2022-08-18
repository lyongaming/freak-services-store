// Reads config file
require("dotenv").config();

// imports
const express = require("express");
const cors = require("cors");

const serviceRoutes = require("./src/routes/ServiceRoutes");
const userRoutes = require("./src/routes/UserRoutes");
const invoiceRoutes = require("./src/routes/InvoiceRoutes");

const app = express();

app.use(cors());

app.use("/services", serviceRoutes);
app.use("/users", userRoutes);
app.use("/invoices", invoiceRoutes);

const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => console.log(`Connected to port ${PORT}`));