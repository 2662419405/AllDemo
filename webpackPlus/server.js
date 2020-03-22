const Koa = require("koa");
const router = require("koa-router")();
const app = new Koa();

router.get("/api", async ctx => {
  ctx.body = {
    name: "sh",
    age: "22"
  };
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8888, () => {
  console.log("服务器启动在8888端口上");
});
