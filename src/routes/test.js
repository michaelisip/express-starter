const express = require('express')
const router = express.Router()

/** Test route controller */
const controller = require('../controllers/TestController')

/** Test route middlewares */
const testMiddleware = require('../middlewares/test')

/** Middlewares */
router.use('/', testMiddleware)

/** Routes */
router.get('/', controller.test2)

module.exports = router