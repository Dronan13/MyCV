const Owner = require('../models/Owner');


module.exports = {
    create,
    getAll,
    getById,
    update,
    delete: _delete
};
 
async function create(data) {
    const job = new Owner(data);
    await job.save();
}
 
async function getAll() {
    return await Owner.find({ 'deleted_at': null });
}
 
async function getById(id) {
    return await Owner.findById(id);
}
 
 
async function update(id, data) {
    const owner = await Owner.findById(id); 
    if (!owner) throw 'Owner not found';
    data.updated_at = Date.now();
    Object.assign(owner, data);
    await owner.save();
}
 
async function _delete(id) {
    const data = await Owner.findById(id); 
    if (!data) throw 'Conference not found';
    data.deleted_at = Date.now();
    await data.save();
}