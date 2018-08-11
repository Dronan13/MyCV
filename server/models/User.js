const mongoose = require('mongoose')
let UserSchema = new mongoose.Schema(
    {
        firstname: String,
        lastname: String,
        email: String,
        provider: String,
        provider_id: String,
        token: String,
        provider_pic: String
    }
)

UserSchema.methods.getUser = function (_id) {
    User.find({'user': _id}).then((article) => {
        return article
    })
}
module.exports = mongoose.model('User', UserSchema)