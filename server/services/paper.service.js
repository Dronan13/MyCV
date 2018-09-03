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
    return await Paper.find({ 'deleted_at': null });
}
 
async function getById(id) {
    return await Paper.findById(id);
}
 
 
async function update(id, data) {
    const paper = await Paper.findById(id); 
    if (!paper) throw 'Paper not found';
    data.updated_at = Date.now();
    Object.assign(paper, data);
    await paper.save();
}
 
async function _delete(id) {
    const data = await Paper.findById(id); 
    if (!data) throw 'Conference not found';
    data.deleted_at = Date.now();
    await data.save();
}