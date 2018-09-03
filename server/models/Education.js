const mongoose = require('mongoose')
let EducationSchema = new mongoose.Schema(
    {
        title: String,  
        university: String,                
        date_start: String,
        date_end: String,
        country: String,
        city: String,
        created_at: {
            type: Date,
            default: Date.now
        },
        updated_at:Date,
        deleted_at:Date,
    }
);

module.exports = mongoose.model('Education', EducationSchema)