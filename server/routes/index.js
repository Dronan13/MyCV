const user = require('./user')
const article = require('./article')
const question = require('./question')
module.exports = (router) => {
    user(router)
    article(router)
    question(router)
}