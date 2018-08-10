/*
chang to example:
@article{SERGIYENKO2016251,
title = "Data transferring model determination in robotic group",
journal = "Robotics and Autonomous Systems",
volume = "83",
pages = "251 - 260",
year = "2016",
issn = "0921-8890",
doi = "https://doi.org/10.1016/j.robot.2016.04.003",
url = "http://www.sciencedirect.com/science/article/pii/S0921889015303146",
author = "O.Yu. Sergiyenko and M.V. Ivanov and V.V. Tyrsa and V.M. Kartashov and M. Rivas-López and D. Hernández-Balbuena and W. Flores-Fuentes and J.C. Rodríguez-Quiñonez and J.I. Nieto-Hipólito and W. Hernandez and A. Tchernykh",
keywords = "Robotic group, Path finding, Vision system, 3D laser scanner, Leadership, Data transfer",
abstract = "Abstract text",
file: = "link to download"
}
*/

const mongoose = require('mongoose')
let ArticleSchema = new mongoose.Schema(
    {
        text: String,
        title: String,
        description: String,
        feature_img: String,
        claps: Number,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        comments: [
            {
                author: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User'
                },
                text: String
            }
        ]
    }
);

ArticleSchema.methods.clap = function() {
    this.claps++
    return this.save()
}

ArticleSchema.methods.comment = function(c) {
    this.comments.push(c)
    return this.save()
}

ArticleSchema.methods.addAuthor = function (author_id) {
    this.author = author_id
    return this.save()
}

ArticleSchema.methods.getUserArticle = function (_id) {
    Article.find({'author': _id}).then((article) => {
        return article
    })
}

module.exports = mongoose.model('Article', ArticleSchema)