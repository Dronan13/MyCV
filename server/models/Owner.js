const mongoose = require('mongoose')
let OwnerSchema = new mongoose.Schema(
    {
        firstname: String,
        middlename: String,
        lastname:String,
        title: String,
        description: String,
        email: String,
        phone_cell: String,
        phone_extra: String, 
        skype: String, 
        country: String,
        city: String,
        address: String,                  
        about: String,
        linkedin_url: String,
        github_url: String,
        facebook_url: String,
        twitter_url: String,
        skills: String,
        created_at: {
            type: Date,
            default: Date.now
        },
        updated_at:Date,
        deleted_at:Date,
    }
);

module.exports = mongoose.model('Owner', OwnerSchema)