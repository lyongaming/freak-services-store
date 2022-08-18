const { response } = require("express");

const { newInvoice } = require("../models/InvoiceModel");

const createInvoice = async(req, res = response) => {
    console.log(req.body)
    await newInvoice(req.body, res);
}

module.exports = {
    createInvoice
}