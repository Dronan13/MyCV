const controller = require('./../controllers/user.ctrl')

module.exports = (router) => {
    router.post('/login', controller.authenticate);
    router.post('/register', controller.register);
    router.get('/user', controller.getAll);
    router.get('/user/:id', controller.getById);
    router.get('/user/current', controller.getCurrent);
    router.put('/user/:id', controller.update);
    router.delete('/user/:id', controller.delete);
}