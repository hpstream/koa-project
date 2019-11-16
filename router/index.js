var Router = require('koa-router');
var router = new Router();
var fs = require('fs');
var path = require('path')

// router.get('*',async (ctx, next) => {
//   // console.log(ctx);
//   next();
// })

router.get('/page', async (ctx, next) => {
  // console.log(ctx);
  let title = 'hello koa2'
  await ctx.render('index', {
    title,
  })
  next();
})



module.exports = router;