var Router = require('koa-router');
var router = new Router({
  prefix: '/api'
});

router
  .get('/2', (ctx, next) => {
      ctx.body = 'Hello World!';
    })

module.exports = router;