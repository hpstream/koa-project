/**
 *  实现自己的koa
 */

const http = require('http');
const context = require("./context");
const request = require("./request");
const response = require("./response");

class Koa {
  constructor() {
    this.middilewares = [];
  }
  listen(port = 3000) {
    var server = http.createServer(async (req, res) => {
      // 执行中间件
      const ctx = this.createContext(req, res)
      const fn = this.compose(this.middilewares);

      await fn(ctx);
      res.end(ctx.body);
    })
    server.listen(port)
  }
  use(cb) {
    this.middilewares.push(cb);
  }
  createContext(req, res) {
    const ctx = Object.create(context);
    ctx.request = Object.create(request);
    ctx.response = Object.create(response);
    ctx.req = ctx.request.req = req;
    ctx.res = ctx.response.res = res;
    return ctx;
  }
  compose(middilewares) {
    return function (ctx) {

      return dispatch(0);

      function dispatch(index) {
        var fn = middilewares[index];
        if (!fn) {
          return Promise.resolve();
        }
        return Promise.resolve(fn(
          ctx,
          function next() {
            return dispatch(index + 1)
          }
        ));
      }
    }
  }
}

module.exports = Koa;