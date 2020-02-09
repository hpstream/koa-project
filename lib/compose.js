// 同步方式
const compose = (...[first, ...other]) => {
  return (...args) => {
    let ret = first(...args);
    other.forEach(fn => {
      ret = fn(ret)
    })

    return ret
  }
}

function add(x, y) {
  return x + y;
}

function square(x) {
  return x * x;
}

var fn = compose(add, square)
console.log(fn(1, 2));


// 异步方式

function AsynCompose(middlewares) {
  return function () {
    return dispatch(0); // 执行函数第一个
    function dispatch(index) {
      let fn = middlewares[index];
      if (!fn) {
        return Promise.resolve();
      }

      return Promise.resolve(
        fn(null,function next() {
          return dispatch(index + 1);
        })
      );
    }

  }
}