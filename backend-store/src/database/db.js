const { Pool } = require("pg");
const pool = new Pool({
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT
});

module.exports = {
    query: async(text, values, callback) => {
        const result = pool.query(text, values, callback);
    }
}   