const mongoose = require('mongoose')
let LanguageSchema = new mongoose.Schema(
    {
        language: String,
        description: String,
        created_at: {
            type: Date,
            default: Date.now
        },
        updated_at:Date,
        deleted_at:Date, 
    }
);

module.exports = mongoose.model('Language', LanguageSchema)