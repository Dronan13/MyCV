const mongoose = require('mongoose')
let ChapterSchema = new mongoose.Schema(
    {
        chapter_title: String, 
        book_title: String,    
        authors:String,
        year: String,
        city: String,
        publisher: String,  
        pages: String,                  
        issn: String,
        doi: String,
        url:String,    
        file_url:String,
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

module.exports = mongoose.model('Chapter', ChapterSchema)