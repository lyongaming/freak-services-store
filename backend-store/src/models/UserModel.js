const db = require("../database/db");
const queries = require("../database/queries.json");

const getUserNames = async(response) => {

    await db.query(queries.getUsersNames, [], (err, res) => {
        const userNames = res.rows.reduce((names, row) => {
            names.push(row.user_name);
            return names;
        }, []);

        response.status(200).json(userNames);
    });

};

module.exports = {
    getUserNames
}