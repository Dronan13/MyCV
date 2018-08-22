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
    return await Job.find();
}
 
async function getById(id) {
    return await Job.findById(id);
}
 
 
async function update(id, data) {
    const job = await Job.findById(id); 
    if (!job) throw 'Job not found';
    Object.assign(job, data);
    await job.save();
}
 
async function _delete(id) {
    await Job.findByIdAndRemove(id);
}