const mongoose = require('mongoose')
let PaperSchema = new mongoose.Schema(
    {
        title: String,
        authors: [{
            firstname: String,
            lastname: String
        }],
        journal: String,
        volume: String,
        issue: String,
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

module.exports = mongoose.model('Paper', PaperSchema)