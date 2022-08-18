const db = require("../database/db");
const queries = require("../database/queries.json");

const getServiceByName = async(name, response) => {

    await db.query(queries.getServiceByName, [`${name}`], (err, result) => {
        response.json(result.rows[0])    
    });
    
}

const getNames = async(response) => {
    await db.query(queries.getServicesNames, [], (err, result) => {
        response.json(result.rows);
    });
}

module.exports = {
    getServiceByName,
    getNames
}