(async () => {

    // 1:N关系
    const Sequelize = require("sequelize");

    // 建立连接
    const sequelize = new Sequelize("kaikeba", "root", "example", {
        host: "localhost",
        dialect: "mysql",
        operatorsAliases: false
    });
    const Player = sequelize.define('player', { name: Sequelize.STRING });
    const Team = sequelize.define('team', { name: Sequelize.STRING });
    Player.belongsTo(Team); // 1端建立关系
    Team.hasMany(Player); // N端建立关系

    // 同步数据库，force: true则会删除已存在表
    sequelize.sync({ force: true }).then(async () => {
        await Team.create({ name: '火箭' });
        await Player.bulkCreate([{ name: '哈登', teamId: 1 }, { name: '保罗', teamId: 1 }]);

        // 1端关联查询  
        const players = await Player.findAll({ include: [Team] });
        console.log(JSON.stringify(players, null, 2));

        // N端关联查询
        const team = await Team.findOne({ where: { name: '火箭' }, include: [Player] });
        console.log(JSON.stringify(team, null, 2));
    });


})()

