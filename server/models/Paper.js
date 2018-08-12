const mongoose = require('mongoose')
let PaperSchema = new mongoose.Schema(
    {
        title: String,
        journal: String,
        volume: String,
        pages: String,
        authors: [{
            firstname: String,
            lastname: String
        }],
        year: String,
        issn: String,
        doi: String,
        url:String,
        keywords:[{
            keyword:String
        }],
        abstract:String,
        file_url:String
    }
);

module.exports = mongoose.model('Paper', PaperSchema)