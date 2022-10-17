let MyPromise = require('./promise.js')
console.log(MyPromise, 'my')
// 回顾Promise的使用方式
// 1、通过let p = new MyPromise()返回一个MyPromise实例，参数是一个方法，在该方法内执行异步操作，最后判断是成功还是失败
// 2、MyPromise有返回一个then方法，该方法有两个函数参数，一个successCallback，一个failCallback
let p = new MyPromise((resolve, reject) => {
  // 模拟异步操作，执行成功或者失败回调
  setTimeout(() => {
    resolve('成功了')
    // reject('失败了')
  }, 1000)
})
p.then((res) => {
  console.log(res, 'res的返回信息')
  // 这个then有可能返回一个普通值，也有可能返回一个Promise的对象，就是自带then
  return 'then1'
}, (err) => {
  console.log(err, '错误日志')
}).then((res) => {
  // 这里返回的是上一个then的return回来的值
  console.log(res, 'then1返回的值')
}, (err) => {
  console.log(err, 'then1返回的错误日志')
})

console.log(p, 'p')