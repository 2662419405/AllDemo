// mongoose.js
const mongoose = require("mongoose");

// 1.连接
mongoose.connect("mongodb://localhost:27017/test",
    { useNewUrlParser: true }
);

const conn = mongoose.connection;
conn.on("error", () => console.error("连接数据库失败"));
conn.once("open", async () => {

    // 2.定义一个Schema - Table
    const Schema = mongoose.Schema({
        category: String,
        name: String
    });

    // 3.编译一个Model, 它对应数据库中复数、小写的Collection
    const Model = mongoose.model("new", Schema);
    try {
        // 4.创建，create返回Promise
        let r = await Model.create({
            category: "温带水果",
            name: "苹果",
            price: 5
        });
        console.log("插入数据:", r);

        // 5.查询，find返回Query，它实现了then和catch，可以当Promise使用
        // 如果需要返回Promise，调用其exec()
        r = await Model.find({ name: "苹果" });
        console.log("查询结果:", r);

        // 6.更新，updateOne返回Query
        r = await Model.updateOne({ name: "苹果" }, { $set: { name: '芒果' } });
        console.log("更新结果：", r);

        // 7.删除，deleteOne返回Query
        r = await Model.deleteOne({ name: "苹果" });
        console.log("删除结果：", r);
    } catch (error) {
        console.log(error);
    }
});