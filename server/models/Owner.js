const mongoose = require('mongoose')
let OwnerSchema = new mongoose.Schema(
    {
        firstname: String,    
        lastname:String,
        email: String,
        phone_cell: String,
        phone_extra: String, 
        skype: String, 
        address: String,                  
        about: String,
        linkedin_url: String,
        github_url: String,
        facebook_url: String,
        twitter_url: String,
        google_url: String,    
        tech:String
    }
);

module.exports = mongoose.model('Owner', OwnerSchema)