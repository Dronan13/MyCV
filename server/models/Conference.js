const mongoose = require('mongoose')
let ConferenceSchema = new mongoose.Schema(
    {
        title: String,
        authors: [{
            firstname: String,
            lastname: String
        }],
        conference_name: String,
        volume: String,
        pages: String,
        year: String,
        publisher: String,             
        issn: String,
        doi: String,
        url:String,    
        file_url:String,
        abstract:String,
        keywords:[{
            keyword:String
        }],
    }
);

module.exports = mongoose.model('Paper', ConferenceSchema)