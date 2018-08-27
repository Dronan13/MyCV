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

const requireAdmin = require('../_helpers/validation/is-admin');

module.exports = (router) => {

    //shared links
    router.post('/login', userctrl.authenticate);
    router.post('/register', userctrl.register);

    //user links

    //admin links
    router.post('/question', questionctrl.create);
    router.get('/question',  requireAdmin, questionctrl.getAll);  
    router.get('/question/:id',  requireAdmin, questionctrl.getAll);    
    router.delete('/question/:id', requireAdmin, questionctrl.delete);

    router.get('/user', requireAdmin, userctrl.getAll);
    router.get('/user/:id', requireAdmin, userctrl.getById);
    router.get('/user/current', requireAdmin, userctrl.getCurrent);
    router.put('/user/:id', requireAdmin, userctrl.update);
    router.delete('/user/:id', requireAdmin, userctrl.delete);
    
    router.post('/paper', requireAdmin, paperctrl.create);
    router.get('/paper', paperctrl.getAll);//
    router.get('/paper/:id', requireAdmin, paperctrl.getById);
    router.put('/paper', requireAdmin, paperctrl.update);
    router.delete('/paper', requireAdmin, paperctrl.delete);
    
    router.post('/book', requireAdmin, bookctrl.create);
    router.get('/book', bookctrl.getAll);//
    router.get('/book/:id', requireAdmin, bookctrl.getById);
    router.put('/book', requireAdmin, bookctrl.update);
    router.delete('/book', requireAdmin, bookctrl.delete);
    
    router.post('/conf', requireAdmin, confctrl.create);
    router.get('/conf', confctrl.getAll);//
    router.get('/conf/:id', requireAdmin, confctrl.getById);
    router.put('/conf', requireAdmin, confctrl.update);
    router.delete('/conf', requireAdmin, confctrl.delete);

    router.post('/chapter', requireAdmin, chapterctrl.create);
    router.get('/chapter', chapterctrl.getAll);//
    router.get('/chapter/:id', requireAdmin, chapterctrl.getById);
    router.put('/chapter', requireAdmin, chapterctrl.update);
    router.delete('/chapter', requireAdmin, chapterctrl.delete);

    router.post('/edu', requireAdmin, eductrl.create);
    router.get('/edu', eductrl.getAll);//
    router.get('/edu/:id', requireAdmin, eductrl.getById);
    router.put('/edu', requireAdmin, eductrl.update);
    router.delete('/edu', requireAdmin, eductrl.delete);

    router.post('/work', requireAdmin, workctrl.create);
    router.get('/work', workctrl.getAll);//
    router.get('/work/:id', requireAdmin, workctrl.getById);
    router.put('/work', requireAdmin, workctrl.update);
    router.delete('/work', requireAdmin, workctrl.delete);

}