module.exports = async (req, res, next) => {
    console.log(`Middleware used for test2 route`)
    next()
}