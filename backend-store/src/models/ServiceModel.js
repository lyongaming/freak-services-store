const db = require("../database/db");
const queries = require("../database/queries.json");

const getServiceByName = async(name, response) => {

    await db.query(queries.getServiceByName, [`%${name}%`], (err, result) => {
        response.json(result.rows)    
    });
    
}

module.exports = {
    getServiceByName
}