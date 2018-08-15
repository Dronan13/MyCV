const mongoose = require('mongoose')
var Schema = mongoose.Schema
UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true
          },
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
          },
        password: {
            type: String,
            required: true,
          },
        passwordConf: {
            type: String,
            required: true,
          },
        date: {
            type: Date,
            default: Date.now
        },
        firstname: String,
        lastname: String,
        phone: String
    }
);

module.exports = mongoose.model('User', UserSchema)