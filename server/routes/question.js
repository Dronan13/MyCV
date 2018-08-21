const controller = require('../controllers/question.ctrl')

module.exports = (router) => {
    router.post('/question', controller.create);
    router.get('/question',  controller.getAll);   
    router.delete('/question/:id', controller.delete);
}