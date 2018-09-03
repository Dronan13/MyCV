const Question = require('../models/Question')
const validateQuestion = require('../_helpers/validation/question');
module.exports = {
    create,
    getAll,  
    getById, 
    update,   
    delete: _delete
};

async function create(questionParam) {
    // validate
    const { errors, isValid } = validateQuestion(questionParam);
    
    if(!isValid) {
        return errors;
    }
    
    const question = new Question(questionParam);
    await question.save();
}
 
async function getAll() {
    return await Question.find({ 'deleted_at': null });
}

async function getById(id) {
    return await Question.findById(id);
}

async function update(id, data) {
    const q = await Question.findById(id); 
    if (!q) throw 'Question not found';
    data.updated_at = Date.now();
    Object.assign(q, data);
    await q.save();
}
 
async function _delete(id) {
    const data = await Question.findById(id); 
    if (!data) throw 'Conference not found';
    data.deleted_at = Date.now();
    await data.save();
}