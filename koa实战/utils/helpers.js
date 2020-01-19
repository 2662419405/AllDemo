const hbs = require("koa-hbs");
const moment = require("moment");

hbs.registerHelper("date", (date, pattern) => {
  try {
    return moment(date).format(pattern);
  } catch (error) {
    return "";
  }
});

