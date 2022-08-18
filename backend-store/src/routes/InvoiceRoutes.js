const router = require("express").Router();
const bodyParser = require("body-parser");

const { createInvoice } = require("../controllers/InvoiceController");

const jsonParser = bodyParser.json();

router.post("/", jsonParser, createInvoice);

module.exports = router;