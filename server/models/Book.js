const mongoose = require('mongoose')
let BookSchema = new mongoose.Schema(
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

BookSchema.methods.clap = function() {
    this.claps++
    return this.save()
}

BookSchema.methods.comment = function(c) {
    this.comments.push(c)
    return this.save()
}

BookSchema.methods.addAuthor = function (author_id) {
    this.author = author_id
    return this.save()
}

BookSchema.methods.getUserArticle = function (_id) {
    Article.find({'author': _id}).then((article) => {
        return article
    })
}

module.exports = mongoose.model('Book', BookSchema)