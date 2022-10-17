const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'
class MyPromise {
  constructor(executor) {
    executor(this.resolve, this.reject)
  }
  state = PENDING
  value = undefined
  reason = undefined
  successCallback = []
  failCallback = []
  resolve = (value) => {
    if (this.state !== PENDING) return 
    this.state = FULFILLED
    this.value = value
    while(this.successCallback.length) this.successCallback.shift()()
  }

  reject = (reason) => {
    if (this.state !== PENDING) return 
    this.state = REJECTED
    this.reason = reason
    while(this.failCallback.length) this.failCallback.shift()()
  }

  then(successCallback, failCallback) {
    successCallback = successCallback ? successCallback : value => value
    failCallback = failCallback ? failCallback : reason => reason
    let promise2 = new MyPromise((resolve, reject) => {
      if (this.state === FULFILLED) {
        // 判断x的值是普通值还是promise对象
        // 如果是普通值 直接调用resolve
        // 如果是promise对象 查看promise对象返回的结果
        // 再根据promise对象返回的结果 决定调用resolve 还是调用reject
        let x = successCallback(this.value)
        resolvePromise(x, resolve, reject)
      } else if (this.state === REJECTED) {
        let x = failCallback(this.reason)
        resolvePromise(x, resolve, reject)
      } else {
        // 处理异步场景
        this.successCallback.push(() => {
          let x = successCallback(this.value)
          resolvePromise(x, resolve, reject)
        })
        this.failCallback.push(() => {
          let x = failCallback(this.reason)
          resolvePromise(x, resolve, reject)
        })
      }
    })
    return promise2
  }

}
function resolvePromise(x, resolve, reject) {
  if (x instanceof MyPromise) {
    x.then(value => resolve(value), reason => reject(reason))
  } else {
    resolve(x)
  }
}
// module.exports = MyPromise


// Promise的使用
let p = new MyPromise((resolve, reject) => {
  // 这里执行异步操作后，根据异步的结果，看是执行resolve还是reject
  setTimeout(() => {
    resolve('成功')
  }, 1000)
  // reject('失败了')
})
p.then(value => {
    console.log(value, '1')
    return 100
}, reason => {
    console.log(reason)
    return 'error'
}).then(value => {
    console.log(value, '2')
}, reason => {
  console.log(reason, '2')
})