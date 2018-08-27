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
    return await Owner.find();
}
 
async function getById(id) {
    return await Owner.findById(id);
}
 
 
async function update(id, data) {
    const owner = await Owner.findById(id); 
    if (!owner) throw 'Owner not found';
    Object.assign(owner, data);
    await owner.save();
}
 
async function _delete(id) {
    await Owner.findByIdAndRemove(id);
}