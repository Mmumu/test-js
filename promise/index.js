let MyPromise = require('./promise2')
var p = new MyPromise((resolve, reject) => {
  setTimeout(() => {  
    resolve('成功')
  }, 1000)
})
p.then((res) => {
  console.log(res, 'res')
  return '100'
}).then((res) => {
  // 这个res是要上个then返回的'100'
  console.log(res, 'then2')
})