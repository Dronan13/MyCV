const Language = require('../models/Language');


module.exports = {
    create,
    getAll,
    getById,
    update,
    delete: _delete
};
 
async function create(data) {
    const language = new Language(data);
    await language.save();
}

async function getAll() {
    return await Language.find({ 'deleted_at': null });
}
 
async function getById(id) {
    return await Language.findById(id);
}
 
 
async function update(id, data) {
    const language = await Language.findById(id); 
    if (!language) throw 'Language not found';
    data.updated_at = Date.now();
    Object.assign(language, data);
    await language.save();
}
 
async function _delete(id) {
    const data = await Language.findById(id); 
    if (!data) throw 'Conference not found';
    data.deleted_at = Date.now();
    await data.save();
}