const Koa = require("koa");
const app = new Koa();
const Router = require('koa-router')
const router = new Router({prefix:'/api/users'})

const users = [{ name: "tom", id: 1 }, { name: "jerry", id: 2 }];

router.get('/:id', ctx => {
    const user = users.find(u => u.id == ctx.params.id)
    if (user) {
        ctx.body = {ok:1, user};
    }
    else {
        ctx.body = {ok:0}
    }
})

app.use(router.routes());
app.listen(3001);