module.exports = (app) => {

    console.log(`Loading Routes...`)

    // test route
    app.get('/test', async (req, res) => {
        console.log('test route loaded')
    })

    /**
     * Error Handlers
     */


    /**
     * Custom endpoints
     */
    app.use('/test2', require('../routes/test'))

}