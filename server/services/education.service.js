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
    var sort = { _id: -1 };
    return await Edu.find().sort(sort);;
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