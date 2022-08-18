const db = require("../database/db");
const queries = require("../database/queries.json");

const newInvoice = async({ userID, services, totalAmount }, response) => {

    await db.query(queries.createInvoice, [`${userID}`, `${totalAmount}`, `${services}`], (err, result) => {
        response.json({ message: "Su compra ha sido exitosa" })
    });
}

module.exports = {
    newInvoice
}