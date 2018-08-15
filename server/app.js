/** require dependencies */
const express = require("express")
const routes = require('./routes/')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cloudinary = require('cloudinary')

const con = require('./config/db')

const app = express()
const router = express.Router()
const url = process.env.MONGODB_URI || con.url

/** configure cloudinary */
cloudinary.config({
    cloud_name: 'dplysrpct',
    api_key: '295877172111623',
    api_secret: 'kAlEy3auH2o40kAiQaD3UAVcGYI'
})

/** connect to MongoDB datastore */
try {
    mongoose.connect(url, {
        //useMongoClient: true
    })    
} catch (error) {
    console.log(error)
}

let port = 5000 || process.env.PORT


/** set up middlewares */
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(helmet())

/** set up routes {API Endpoints} */
routes(router)
app.use('/api', router)

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});