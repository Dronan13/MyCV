const mongoose = require('mongoose')
let SkillSchema = new mongoose.Schema(
    {
        skill: String,
        created_at: {
            type: Date,
            default: Date.now
        },
        updated_at:Date,
        deleted_at:Date, 
    }
);

module.exports = mongoose.model('Skill', SkillSchema)