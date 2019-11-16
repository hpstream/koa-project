const Koa = require('koa');
var app = new Koa();
var router = require('./router/index');
var api = require('./router/api/index');
const views = require('koa-views')
var path = require('path')
const static = require('koa-static');
// 配置静态web服务的中间件
  app.use(static(path.join(__dirname, 'static')));
  app.use(views(path.join(__dirname, './view'), {
    extension: 'ejs'
  }))
app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(api.routes())
  .use(api.allowedMethods());




const server = require('./socket/socket')(app)

server.listen(3000, function () {
  console.log('open port:3000');
});