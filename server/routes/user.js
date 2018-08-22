const controller = require('../controllers/user.ctrl');
//const controller2 = require('../controllers/books.ctrl');
const controller3 = require('../controllers/paper.ctrl');
const requireAdmin = require('../_helpers/validation/is-admin');

module.exports = (router) => {
    router.post('/login', controller.authenticate);
    router.post('/register', controller.register);
    router.get('/user', requireAdmin, controller.getAll);
    router.get('/user/:id', requireAdmin, controller.getById);
    router.get('/user/current', requireAdmin, controller.getCurrent);
    router.put('/user/:id', requireAdmin, controller.update);
    router.delete('/user/:id', requireAdmin, controller.delete);

    router.post('/paper', requireAdmin, controller3.create);
}