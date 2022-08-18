const db = require("../database/db");
const queries = require("../database/queries.json");

const getUserNames = async(response) => {

    await db.query(queries.getUsersNames, [], (err, res) => {
        const userNames = res.rows.reduce((users, row) => {
            users.push({
                id: row.user_id,
                name: row.user_name
            });
            return users;
        }, []);

        response.status(200).json(userNames);
    });

};

const getUserByName = async(name, response) => {

    await db.query(queries.getUser, [`${name}`], (err, res) => {
        response.json(res.rows[0]);
    });

}

module.exports = {
    getUserNames,
    getUserByName
}