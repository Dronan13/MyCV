const mongoose = require('mongoose')
let EducationSchema = new mongoose.Schema(
    {
        title: String,  
        university: String,                
        date_start: String,
        date_end: String,
        country: String,
        city: String,
        description:String,
        gpa: String
    }
);

module.exports = mongoose.model('Education', EducationSchema)