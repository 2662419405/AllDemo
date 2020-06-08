(async () => {

    // 1:N关系
    const Sequelize = require("sequelize");

    // 建立连接
    const sequelize = new Sequelize("kaikeba", "root", "example", {
        host: "localhost",
        dialect: "mysql",
    });

    const Fruit = sequelize.define("fruit", { name: Sequelize.STRING });
    const Category = sequelize.define("category", { name: Sequelize.STRING });
    Fruit.FruitCategory = Fruit.belongsToMany(Category, {
        through: "FruitCategory"
    });

    // 插入测试数据
    sequelize.sync({ force: true }).then(async () => {
        await Fruit.create(
            {
                name: "香蕉",
                categories: [{ id: 1, name: "热带" }, { id: 2, name: "温带" }]
            },
            {
                include: [Fruit.FruitCategory]
            }
        );
        // 多对多联合查询
        const fruit = await Fruit.findOne({
            where: { name: "香蕉" }, // 通过through指定条件、字段等
            include: [{ model: Category, through: { attributes: ['id', 'name'] } }]
        });
    })

})()

