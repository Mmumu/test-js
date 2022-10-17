// 科里化
// 1、调用科里化的方法，若参数不够，返回一个函数，等待其他参数的传入
// 2、若参数足够了，则执行方法
// 3、可以支持链式调用
function curry (fn, ...arg) {
  let argArr = []
  return function waitParam(...arg) {
    argArr = argArr.concat(arg)
    if (argArr.length === fn.length) {
      fn(...argArr)
    } else {
      return waitParam
    }
  }
}
var handle = function (x, y) {
  console.log(x + y, 'x + y')
}
let fn = curry(handle)
let fn1 = fn(1)
fn1(2)
