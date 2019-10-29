const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const expressRateLimit = require('express-rate-limit')
const hpp = require('hpp')

module.exports = (app) => {

    console.log(`Loading Middlewares...`)

    /**
     * Request Logger
     * 
     * Morgan Packages used
     */
    app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))


    /**
     * Cross Origin Resource
     * 
     * Set Origins, headers, and methods specifically when on production
     */ 
    app.use(cors())

    /**
     * Parser request body
     * 
     * To be able to use req.body on route controllers
     */
    app.use(bodyParser.json({ extended: false }))

    /**
     * Limit incoming request to protect app from brute force attacks
     */
    app.use(expressRateLimit({
        windowMs: 15 * 60 * 1000,
        max: 1000
    }))

    /**
     * Protection against http parameter pollution attacks
     * 
     * Make sure to parse body first
     */
    app.use(hpp())

    /**
     * Add custom middleware functions here..
     */
    
}