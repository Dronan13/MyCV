const questionService = require('../services/question.service'); 
const isAdmin = require('../_helpers/validation/is-admin');

module.exports = {
    create,
    getAll,    
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

 
function _delete(req, res, next) {
    questionService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}