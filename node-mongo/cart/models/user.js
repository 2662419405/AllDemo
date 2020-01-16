const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: String,
  password: String,
  cart: []
});

schema.statics.getCart = function(_id) {
  return this.model("user")
    .findById(_id)
    .exec();
};

schema.statics.setCart = function(_id, cart) {
  return this.model("user")
    .findByIdAndUpdate(_id, { $set: { cart } })
    .exec();
};

const model = mongoose.model("user", schema);

// 测试数据
model.updateOne(
  { _id: "5c1a2dce951e9160f0d8573b" },
  { name: "jerry", cart: [{ pname: "iPhone", price: 666, count: 1 }] },
  { upsert: true },
  (err, r) => {
    console.log('测试数据');
    console.log(err, r);
  }
);

module.exports = model;