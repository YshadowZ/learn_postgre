const route = require('koa-route');
route.get('/route1', ctx => ctx.body = 1);
module.exports = route;