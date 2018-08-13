const mongoose = require('mongoose')
let ChapterSchema = new mongoose.Schema(
    {
        chapter_title: String, 
        book_title: String,    
        authors: [{
            firstname: String,
            lastname: String
        }],
        year: String,
        city: String,
        publisher: String,  
        pages: String,                  
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

module.exports = mongoose.model('Chapter', ChapterSchema)