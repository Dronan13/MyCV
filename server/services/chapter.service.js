const Chapter = require('../models/Chapter');

module.exports = {
    create,
    getAll,
    getById,
    update,
    delete: _delete
};
 
async function create(data) {
    const chapter = new Chapter(data);
    await chapter.save();
}
 
async function getAll() {
    return await Chapter.find();
}
 
async function getById(id) {
    return await Chapter.findById(id);
}
 
async function update(id, data) {
    const chapter = await Chapter.findById(id); 
    if (!chapter) throw 'Book not found';
    Object.assign(chapter, data);
    await chapter.save();
}

async function _delete(id) {
    await Chapter.findByIdAndRemove(id);
}