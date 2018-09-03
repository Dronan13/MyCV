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
        role: {
            type: String,
            default: 'user',
          },
        created_at: {
            type: Date,
            default: Date.now
        },
        updated_at:Date,
        deleted_at:Date,
    }
);

module.exports = mongoose.model('User', UserSchema)