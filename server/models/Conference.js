const mongoose = require('mongoose')
let ConferenceSchema = new mongoose.Schema(
    {
        title: String,
        authors:String,
        conference: String,
        volume: String,
        pages: String,
        year: String,
        publisher: String,             
        issn: String,
        doi: String,
        url:String,    
        abstract:String,
        keywords:String,
        created_at: {
            type: Date,
            default: Date.now
        },
        updated_at:Date,
        deleted_at:Date,
    }
);

module.exports = mongoose.model('Conference', ConferenceSchema)