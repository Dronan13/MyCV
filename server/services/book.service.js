const Book = require('../models/Book');

module.exports = {
    create,
    getAll,
    getById,
    update,
    delete: _delete
};
 
async function create(data) {
    const book = new Book(data);
    await book.save();
}
 
async function getAll() {
    return await Book.find({ 'deleted_at': null });
}
 
async function getById(id) {
    return await Book.findById(id);
}
 
async function update(id, data) {
    const book = await Book.findById(id); 
    if (!book) throw 'Book not found';
    data.updated_at = Date.now();
    Object.assign(book, data);
    await book.save();
}

async function _delete(id) {
    const data = await Book.findById(id); 
    if (!data) throw 'Conference not found';
    data.deleted_at = Date.now();
    await data.save();
}