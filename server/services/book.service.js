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
    return await Book.find();
}
 
async function getById(id) {
    return await Book.findById(id);
}
 
async function update(id, data) {
    const book = await Book.findById(id); 
    if (!book) throw 'Book not found';
    Object.assign(book, data);
    await book.save();
}

async function _delete(id) {
    await Book.findByIdAndRemove(id);
}