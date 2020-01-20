
// mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/weixin')

exports.AccessToken = mongoose.model('AccessToken', { token: String });

exports.Chat = mongoose.model('Chat', { content: String });
