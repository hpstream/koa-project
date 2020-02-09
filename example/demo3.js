const Koa = require('./../lib/app');
const app = new Koa();

const delay = () => Promise.resolve(resolve => setTimeout(() => resolve(), 2000));
app.use(async (ctx, next) => {
  ctx.body = "1";
  // setTimeout(() => {
  //   ctx.body += "2";
  // }, 1000);
  await next();
  ctx.body += "3";
});
app.use(async (ctx, next) => {
  ctx.body += "4";
  await next();
  ctx.body += "5";
  
});
app.use(async (ctx, next) => {
  ctx.body += "6";
  next();
});

app.use(async (ctx, next) => {
  ctx.body += "7";
});




// 顺序会按照1，2，3，4，5，6 输出

app.listen(3000,()=>{})