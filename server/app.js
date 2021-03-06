/** require dependencies */

const express = require("express")
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')

const jwt = require('./_helpers/jwt')

const app = express()
const router = express.Router()

require('dotenv').config();

const url = process.env.MONGODB_URI

/** connect to MongoDB datastore */
try {
    mongoose.connect(url)
    mongoose.Promise = global.Promise
} catch (error) {
    console.log(error)
}

let port = process.env.API_PORT


/** set up middlewares */
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(helmet())


/** set up routes {API Endpoints} */
routes(router)
app.use('/api', router)

// use JWT auth to secure the api
app.use(jwt())

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});