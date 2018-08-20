const Question = require('../models/Question')
const validateQuestion = require('../_helpers/validation/question');
module.exports = {
    create,
    getAll,    
    delete: _delete
};

 
async function getAll() {
    return await Question.find();
}

async function create(questionParam) {
    // validate
    const { errors, isValid } = validateQuestion(questionParam);
    
    if(!isValid) {
        return errors;
    }

    const question = new User(questionParam);
    await question.save();
}
 
async function _delete(id) {
    await Question.findByIdAndRemove(id);
}