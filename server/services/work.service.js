const Job = require('../models/Job');


module.exports = {
    create,
    getAll,
    getById,
    update,
    delete: _delete
};
 
async function create(data) {
    const job = new Job(data);
    await job.save();
}

async function getAll() {
    var sort = { _id: -1 };
    return await Job.find({ 'deleted_at': null }).sort(sort);
}
 
async function getById(id) {
    return await Job.findById(id);
}
 
 
async function update(id, data) {
    const job = await Job.findById(id); 
    if (!job) throw 'Job not found';
    data.updated_at = Date.now();
    Object.assign(job, data);
    await job.save();
}
 
async function _delete(id) {
    const data = await Job.findById(id); 
    if (!data) throw 'Conference not found';
    data.deleted_at = Date.now();
    await data.save();
}