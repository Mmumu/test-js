

Function.prototype.myBind = function (obj, ...arg) {
  var _that = this
  var arg1 = arg
  return function (...arg) {
    console.log(arg, 'arg')
    console.log(arg1, 'arg1')
    // _that.apply(obj, arg.concat(arg1))
    obj.fn = _that
    obj.fn(...arg.concat(arg1))
    delete obj.fn
  }
}
// 使用方式
var fn = function (x, y, m, n) {
  console.log(x, 'x')
  console.log(y, 'y')
  console.log(m, 'm')
  console.log(n, 'n')
  console.log(this.name, 'this')
}
var obj = {
  name: 'xxx',
  age: 19
}

var fn2 = fn.myBind(obj, 1, 2)
fn2(3, 4)
