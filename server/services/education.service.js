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
    return await Edu.find({ 'deleted_at': null }).sort(sort);;
}
 
async function getById(id) {
    return await Edu.findById(id);
}
 
async function update(id, data) {
    const edu = await Edu.findById(id); 
    if (!edu) throw 'Education not found';
    data.updated_at = Date.now();
    Object.assign(edu, data);
    await edu.save();
}

async function _delete(id) {
    const data = await Edu.findById(id); 
    if (!data) throw 'Conference not found';
    data.deleted_at = Date.now();
    await data.save();
}