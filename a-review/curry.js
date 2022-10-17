// 回顾curry函数的使用方式
// 1、调用curry函数，第一个参数传入方法handle，其余参数当做后续调用handle方法的参数
// 2、判断curry除了handle参数外，其余的参数是否和handle方法需要的参数数量相等
// 3、若相等，则调用handle方法，若不相等，则返回一个方法，等待参数
function curry (handle, ...arg) {
  // 获取handle方法的参数数量
  const paramLen = handle.length
  if (paramLen === arg.length) {
    handle.call(this, ...arg)
  } else {
    return function (...arg2) {
      curry(handle, ...arg.concat(arg2))
    }
  }
}

function handle (x, y) {
  console.log(x + y, 'x + y')
}
const fn = curry(handle, 1)
console.log(fn, 'fn')
fn(3)
