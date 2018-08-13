const mongoose = require('mongoose')
let JobSchema = new mongoose.Schema(
    {
        job: String, 
        company: String,           
        date_start: String,
        date_end: String,
        country: String,
        city: String,
        description:String
    }
);

module.exports = mongoose.model('Job', JobSchema)