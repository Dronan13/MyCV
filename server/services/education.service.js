const Edu = require('../models/Education');

module.exports = {
    create,
    getAll,
    getById,
    update,
    delete: _delete
};
 
async function create(data) {
    const edu = new Edu(data);
    await edu.save();
}
 
async function getAll() {
    return await Edu.find();
}
 
async function getById(id) {
    return await Edu.findById(id);
}
 
async function update(id, data) {
    const edu = await Edu.findById(id); 
    if (!edu) throw 'Education not found';
    Object.assign(edu, data);
    await edu.save();
}

async function _delete(id) {
    await Edu.findByIdAndRemove(id);
}