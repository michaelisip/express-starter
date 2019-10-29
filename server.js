const express = require('express')
const app = express()

/**
 * Load .env variables
 */
require('dotenv').config()

// set port
const PORT = process.env.SERVER_PORT || 8081

/**
 * Load Middlewares
 */
require('./src/middlewares/index')(app)

/**
 * Load Routes
 */
require('./src/routes/index')(app)

app.listen(PORT, () => console.log(`Listening to port ${PORT}...`))