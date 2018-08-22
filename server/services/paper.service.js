const Paper = require('../models/Paper');

module.exports = {
    create,
    getAll,
    getById,
    update,
    delete: _delete
};
 
async function create(data) {
    const paper = new Paper(data);
    await paper.save();
}
 
async function getAll() {
    return await Paper.find();
}
 
async function getById(id) {
    return await Paper.findById(id);
}
 
 
async function update(id, data) {
    const paper = await Paper.findById(id); 
    if (!paper) throw 'Paper not found';
    Object.assign(paper, data);
    await paper.save();
}
 
async function _delete(id) {
    await Paper.findByIdAndRemove(id);
}