const controller = require('./../controllers/user.ctrl')

module.exports = (router) => {

    router
        .route('/user')
        .post(controller.add)

    router
        .route('/user')
        .get(controller.all)

    router
        .route('/user/:id')
        .get(controller.one)
    
    router
        .route('/user/:id')
        .put(controller.update)    

    router
        .route('/user/:id')
        .delete(controller.delete)       
}