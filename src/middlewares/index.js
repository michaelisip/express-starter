const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

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
     * Add custom middleware functions here..
     */
    
}