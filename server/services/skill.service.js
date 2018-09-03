const Skill = require('../models/Skill');


module.exports = {
    create,
    getAll,
    getById,
    update,
    delete: _delete
};
 
async function create(data) {
    const skill = new Skill(data);
    await skill.save();
}

async function getAll() {
    return await Skill.find({ 'deleted_at': null });
}
 
async function getById(id) {
    return await Skill.findById(id);
}
 
 
async function update(id, data) {
    const skill = await Skill.findById(id); 
    if (!skill) throw 'Skill not found';
    data.updated_at = Date.now();
    Object.assign(skill, data);
    await skill.save();
}
 
async function _delete(id) {
    const data = await Skill.findById(id); 
    if (!data) throw 'Skill not found';
    data.deleted_at = Date.now();
    await data.save();
}