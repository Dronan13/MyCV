const mongoose = require('mongoose')
var Schema = mongoose.Schema
UserSchema = new mongoose.Schema(
    {
        firstname: String,
        lastname: String,
        email: String,
        phone: String
    }
);

module.exports = mongoose.model('User', UserSchema)