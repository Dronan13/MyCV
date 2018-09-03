const Conf = require('../models/Conference');

module.exports = {
    create,
    getAll,
    getById,
    update,
    delete: _delete
};
 
async function create(data) {
    const conf = new Conf(data);
    await conf.save();
}
 
async function getAll() {
    return await Conf.find({ 'deleted_at': null });
}
 
async function getById(id) {
    return await Conf.findById(id);
}
 
async function update(id, data) {
    const conf = await Conf.findById(id); 
    if (!conf) throw 'Conference not found';
    data.updated_at = Date.now();
    Object.assign(conf, data);
    await conf.save();
}

async function _delete(id) {
    const data = await Conf.findById(id); 
    if (!data) throw 'Conference not found';
    data.deleted_at = Date.now();
    await data.save();
}