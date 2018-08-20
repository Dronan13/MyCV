const mongoose = require('mongoose')    
QuestionSchema = new mongoose.Schema(
    {       
        firstname: {
            type: String,
            required: true,
            trim: true
          },
        lastname: {
            type: String,
            required: true,
            trim: true
          },
        email: {
            type: String,
            required: true,
            trim: true
          },
        question: {
            type: String,
            required: true
          },
        
        status: {
            type: String,
            default: 'pending'
          },
          
        createdDate: {
            type: Date,
            default: Date.now
        }
    }
);

module.exports = mongoose.model('Question', QuestionSchema)