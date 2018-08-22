const config = require('../config.json');
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
    return await Conf.find();
}
 
async function getById(id) {
    return await Conf.findById(id);
}
 
async function update(id, data) {
    const conf = await Book.findById(id); 
    if (!conf) throw 'Conference not found';
    Object.assign(conf, data);
    await conf.save();
}

async function _delete(id) {
    await Conf.findByIdAndRemove(id);
}