const router = require("express").Router();
const { getInvoices, createInvoice } = require("../controllers/InvoiceController");

router.get("/", getInvoices);

router.post("/", createInvoice);

module.exports = router;