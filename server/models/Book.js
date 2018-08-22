const mongoose = require('mongoose')
let BookSchema = new mongoose.Schema(
    {
        title: String,    
        authors:String,
        year: String,
        city: String,
        publisher: String,  
        pages: String,                  
        issn: String,
        doi: String,
        url:String,    
        abstract:String,
        keywords:String,
    }
);

module.exports = mongoose.model('Book', BookSchema)