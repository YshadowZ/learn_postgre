const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const cvsCtrl = require('./controller/cvs');

router.get('/', cvsCtrl.fetchcvs)

app.use(router.routes());
app.listen(3000);

console.log('server start on 3000')
