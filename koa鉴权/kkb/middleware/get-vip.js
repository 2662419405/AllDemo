const vip = require("../models/vip");

module.exports = async (ctx, next) => {
  if (ctx.accepts("html") === 'html') {
    ctx.state.vipCourses = await vip.find();
  }

  await next();
};