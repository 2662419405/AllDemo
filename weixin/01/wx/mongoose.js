const mongoose = require('mongoose')
const {
    Schema
} = mongoose
mongoose.connect('mongodb://localhost:27017/weixin', {
    useNewUrlParser: true
}, () => {
    console.log('Mongodb connected..')
})
exports.ServerToken = mongoose.model('ServerToken', {
    accessToken: String
});