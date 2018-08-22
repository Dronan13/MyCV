const questionService = require('../services/question.service'); 

module.exports = {
    create,
    getAll,  
    getById, 
    update, 
    delete: _delete
};


function create(req, res, next){
    questionService.create(req.body)
        .then(data => data ? res.status(400).json(data) : res.json(data))
        .catch(err => next(err));
}
 
function getAll(req, res, next) {
    questionService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getById(req, res, next) {
    dataService.getById(req.params.id)
        .then(data => data ? res.json(data) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    dataService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}
 
function _delete(req, res, next) {
    questionService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}