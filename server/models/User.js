const mongoose = require('mongoose')    
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
        createdDate: {
            type: Date,
            default: Date.now
        }
    }
);

module.exports = mongoose.model('User', UserSchema)