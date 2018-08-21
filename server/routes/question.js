const controller = require('../controllers/question.ctrl');
const requireAdmin = require('../_helpers/validation/is-admin');

module.exports = (router) => {
    router.post('/question', controller.create);
    router.get('/question',  requireAdmin, controller.getAll);   
    router.delete('/question/:id', requireAdmin, controller.delete);
}