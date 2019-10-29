const mysql = require('mysql')

/** set db configurations */
const dbConfig = {
    host: process.env.DB_PORT || 'localhost',
    user: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_DATABASE || 'express-start',
}

/** set new mysql connection as default export */
module.exports.connection = mysql.createPool(dbConfig)