const db = require("../database/db");
const queries = require("../database/queries.json");

const newInvoice = async(invoice, response) => {
    await db.query(queries.getUserId, [invoice.user], async(err, res) => {
        if(res) {
            const userId = res.rows[0].user_id;
            await db.query(queries.createInvoice, [invoice.services, invoice.amount, 0, userId], async(err, res) => {
                if(res) {
                    response.status(201).json({ msg: "Invoice in processing" });
                }               
            })
        }
    });
}

module.exports = {
    newInvoice
}