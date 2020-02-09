const Koa = require('./../lib/app');
const app = new Koa();

const Router = require('./../lib/router')
const router = new Router();

const static = require('./../lib/static');
app.use(static(__dirname + '/../static'));
router.get('/index', async ctx => {
  ctx.body = 'index page';
});
router.get('/post', async ctx => {
  ctx.body = 'post page';
});
router.get('/list', async ctx => {
  ctx.body = 'list page';
});
router.post('/index', async ctx => {
  ctx.body = 'post page';
});
// 路由实例输出父中间件 
router.routes() 
app.use(router.routes());




// 顺序会按照1，2，3，4，5，6 输出

app.listen(3000, () => {})