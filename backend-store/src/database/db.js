const { Pool } = require("pg");
const pool = new Pool({
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT
});

module.exports = {
    query: async(text, values, callback) => {
        const result = pool.query(text, values, callback);
    }
}   