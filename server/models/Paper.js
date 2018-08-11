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

PaperSchema.methods.clap = function() {
    this.claps++
    return this.save()
}

PaperSchema.methods.comment = function(c) {
    this.comments.push(c)
    return this.save()
}

PaperSchema.methods.addAuthor = function (author_id) {
    this.author = author_id
    return this.save()
}

PaperSchema.methods.getUserPaper = function (_id) {
    Paper.find({'author': _id}).then((Paper) => {
        return Paper
    })
}

module.exports = mongoose.model('Paper', PaperSchema)