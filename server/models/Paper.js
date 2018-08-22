const mongoose = require('mongoose')
let PaperSchema = new mongoose.Schema(
    {
        title: String,
        authors:String,
        journal: String,
        volume: String,
        issue: String,
        pages: String,    
        year: String,
        publisher: String,             
        issn: String,
        doi: String,
        url:String,    
        abstract:String,
        keywords:String,
    }
);

module.exports = mongoose.model('Paper', PaperSchema)