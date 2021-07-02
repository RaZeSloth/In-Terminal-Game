require('dotenv').config();
const { createConnection } = require('mysql2');

let connection = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
})

connection.connect((err) => {
    if(err) {
        return console.log(err)
    }
})

module.exports = { connection }
