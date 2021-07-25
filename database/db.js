require('dotenv').config();
const { createConnection } = require('mysql2');
const chalk = require("chalk");
let connection = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
})

connection.connect((err) => {
    if (err) {
        return console.log(chalk.red("Something went wrong while connecting to the database, check if you have installed a MySQL server on your PC and if you have also entered the correct data in the .env file."))
    }
})

module.exports = { connection }