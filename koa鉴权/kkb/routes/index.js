const Router = require("koa-router");
const router = new Router();
router.get("/", async ctx => {
  //若cookie中存在记录则不再播放，index.js
  let showVideo;
  if (ctx.cookies.get('isPlayed')) {
    showVideo = false;
  } else {
    showVideo = true;
    ctx.cookies.set('isPlayed', true, { maxAge: 7 * 24 * 3600000 });
  }

  // ctx.body = "index";
  const list = [...ctx.state.vipCourses];
  list.sort((a, b) => (a.sort - b.sort));
  
  await ctx.render('index', { list, showVideo })
});
module.exports = router;