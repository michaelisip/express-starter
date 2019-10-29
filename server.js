const express = require('express')
const app = express()

// set port
const PORT = process.env.PORT || 8081

/**
 * Load Middlewares
 */
require('./src/middlewares/index')(app)

/**
 * Load Routes
 */
require('./src/routes/index')(app)

app.listen(PORT, () => console.log(`Listening to port ${PORT}...`))