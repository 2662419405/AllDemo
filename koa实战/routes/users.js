const Router = require("koa-router");
const router = new Router({ prefix: '/users' });
router.get("/", async ctx => {
  console.log('user')
  // ctx.body = "users list";
  await ctx.render("users", {
    title: "用户列表",
    subTitle: "handlebars语法",
    isShow: true,
    username: "jerry",
    htmlStr: `<h3>abc</h3>`,
    users: [
      { username: "tom", age: 20, birth: new Date(1999, 2, 2) },
      { username: "jerry", age: 20, birth: new Date(1999, 3, 2) }
    ]
  });
});
module.exports = router;