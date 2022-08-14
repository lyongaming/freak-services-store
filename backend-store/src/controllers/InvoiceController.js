const { response } = require("express");

const { newInvoice } = require("../models/InvoiceModel");

const getInvoices = (req, res = response) => {
    const invoices = [
        {
            "services": ["Xbox", "Fortnite"],
            "amount": 400,
            "user": "Lyon"
        },
        {
            "services": ["Xbox", "Playstation+"],
            "amount": 400000000000000000,
            "user": "Baity"
        }
    ];
    res.status(200).json(invoices);
}

const createInvoice = (req, res = response) => {
    newInvoice({...req.body}, res);
}

module.exports = {
    getInvoices,
    createInvoice
}