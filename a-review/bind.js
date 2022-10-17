// 回顾下bind的使用方式
// 1、bind是Function的实例方法，参数是一个方法
// 2、bind的第一个参数是一个对象，其他的参数，是该方法的参数
// 3、bind的返回是一个方法，需要再次执行回调方法才能执行
Function.prototype.myBind = function (obj, ...arg1) {
  const that = this
  return function (...arg) {
    obj.handle = that
    obj.handle(...arg1, ...arg)
    delete obj.handle
  }
}

var handle = function (...arg) {
  console.log(arg, 'arg')
  console.log(this.name, 'name')
}
const obj = {
  name: 'xxx',
  age: 18
}
let fn = handle.myBind(obj, 1)
fn(2)