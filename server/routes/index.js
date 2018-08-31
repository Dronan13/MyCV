//const user = require('./user')
//const article = require('./article')
//const question = require('./question') 
//user(router)
//article(router)
//question(router)

const userctrl = require('../controllers/user.ctrl');
const paperctrl = require('../controllers/paper.ctrl');
const bookctrl = require('../controllers/book.ctrl');
const confctrl = require('../controllers/conference.ctrl');
const chapterctrl = require('../controllers/chapter.ctrl');
const eductrl = require('../controllers/education.ctrl');
const workctrl = require('../controllers/work.ctrl');
const questionctrl = require('../controllers/question.ctrl');
const ownerctrl = require('../controllers/owner.ctrl');

const requireAdmin = require('../_helpers/validation/is-admin');

module.exports = (router) => {

    //shared links
    router.post('/login', userctrl.authenticate);//
    router.post('/register', userctrl.register);//

    router.post('/question', questionctrl.create);//
    router.get('/question',  requireAdmin, questionctrl.getAll);  
    router.get('/question/:id',  requireAdmin, questionctrl.getAll);    
    router.delete('/question/:id', requireAdmin, questionctrl.delete);

    router.get('/user', requireAdmin, userctrl.getAll);
    router.get('/user/:id', requireAdmin, userctrl.getById);
    router.put('/user/:id', requireAdmin, userctrl.update);
    router.delete('/user/:id', requireAdmin, userctrl.delete);
    
    router.post('/paper', requireAdmin, paperctrl.create);
    router.get('/paper', paperctrl.getAll);//
    router.get('/paper/:id', requireAdmin, paperctrl.getById);
    router.put('/paper/:id', requireAdmin, paperctrl.update);
    router.delete('/paper/:id', requireAdmin, paperctrl.delete);
    
    router.post('/book', requireAdmin, bookctrl.create);
    router.get('/book', bookctrl.getAll);//
    router.get('/book/:id', requireAdmin, bookctrl.getById);
    router.put('/book/:id', requireAdmin, bookctrl.update);
    router.delete('/book/:id', requireAdmin, bookctrl.delete);
    
    router.post('/conf', requireAdmin, confctrl.create);
    router.get('/conf', confctrl.getAll);//
    router.get('/conf/:id', requireAdmin, confctrl.getById);
    router.put('/conf/:id', requireAdmin, confctrl.update);
    router.delete('/conf/:id', requireAdmin, confctrl.delete);

    router.post('/chapter', requireAdmin, chapterctrl.create);
    router.get('/chapter', chapterctrl.getAll);//
    router.get('/chapter/:id', requireAdmin, chapterctrl.getById);
    router.put('/chapter/:id', requireAdmin, chapterctrl.update);
    router.delete('/chapter/:id', requireAdmin, chapterctrl.delete);

    router.post('/edu', requireAdmin, eductrl.create);
    router.get('/edu', eductrl.getAll);//
    router.get('/edu/:id', requireAdmin, eductrl.getById);
    router.put('/edu/:id', requireAdmin, eductrl.update);
    router.delete('/edu/:id', requireAdmin, eductrl.delete);

    router.post('/work', requireAdmin, workctrl.create);
    router.get('/work', workctrl.getAll);//
    router.get('/work/:id', requireAdmin, workctrl.getById);
    router.put('/work/:id', requireAdmin, workctrl.update);
    router.delete('/work/:id', requireAdmin, workctrl.delete);

    router.post('/owner', requireAdmin, ownerctrl.create);
    router.get('/owner', ownerctrl.getAll);//
    router.get('/owner/:id', ownerctrl.getById);
    router.put('/owner/:id', requireAdmin, ownerctrl.update);
    router.delete('/owner/:id', requireAdmin, ownerctrl.delete);

}