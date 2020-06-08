// mongoose.js
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

// ClientAccessToken
schema = new Schema({
    access_token: String,
    expires_in: Number,
    refresh_token: String,
    openid: String,
    scope: String,
    create_at: String
});
// 自定义getToken方法
schema.statics.getToken = async function (openid, cb) {
    return await this.findOne({
        openid: openid
    });
};
schema.statics.setToken = async function (openid, token) {
    // 有则更新，无则添加
    const query = {
        openid: openid
    };
    const options = {
        upsert: true
    };
    return await this.updateOne(query, token, options);
};
exports.ClientToken = mongoose.model('ClientToken', schema);


// ClientAccessToken
schema = new Schema({
    openid: String,
    data: Object,
});
// 自定义getToken方法
schema.statics.get = async function (openid) {
    return await this.findOne({
        openid: openid
    })
};
schema.statics.save = async function (openid, data, cb) {
    // 有则更新，无则添加
    const query = {
        openid: openid
    }
    const options = {
        upsert: true
    }
    data = {
        openid,
        data
    }
    return await this.updateOne(query, data, options)
};

exports.Quiz = mongoose.model('Quiz', schema);