// Promise有三种状态，不可逆
// 分别是：PENDING、FULLFILLED、REJECTED，状态初始时为PENDING，若后面执行成功
let PENDING = 'PENDING',
    FULFILLED = 'FULFILLED',
    REJECTED = 'REJECTED'
class MyPromise {
  status = PENDING
  res = null
  err = null
  successCallback = []
  failCallback = []
  constructor (exector) {
    exector(this.resolve, this.reject)
  }
  resolve = (res) => {
    // 如果传入的方法，执行了成功resolve
    // 需要把status的状态改成FULFILLED
    if (this.status === PENDING) {
      this.status = FULFILLED
      this.res = res
      // 判断successCallback是否有值，有的话则执行
      while (this.successCallback.length) {
        this.successCallback.shift()(this.res)
      }
    }
  }
  reject = (err) => {
    // 如果传入的方法，执行了成功reject
    // 需要把status的状态改成REJECTED
    if (this.status === PENDING) {
      this.status = REJECTED
      this.err = err
      // 判断successCallback是否有值，有的话则执行
      while (this.failCallback.length) {
        this.failCallback.shift()(this.err)
      }
    }
  }
  then (successCallback = value => value, failCallback = reason => reason) {
    // 判断status的状态
    // 如果是FULFILLED，则调用successCallback
    // 如果是REJECTED，则调用failCallback
    // 如果是PENDING，则需要把successCallback、failCallback存储起来，以备后面resolve或者reject的时候调用
    return new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        let x = successCallback(this.res)
        resolvePromise(x, resolve, reject)
      } else if (this.status === REJECTED) {
        let x = failCallback(this.err)
        resolvePromise(x, resolve, reject)
      } else {
        this.successCallback.push(() => {
          let x = successCallback(this.res)
          resolvePromise(x, resolve, reject)
        })
        this.failCallback.push(() => {
          let x = failCallback(this.err)
          resolvePromise(x, resolve, reject)
        })
      }
    })
  }
}
function resolvePromise (x, resolve, reject) {
  // 判断x是否是MyPromise的实例
  if (x instanceof MyPromise) {
    x.then(res => resolve(this.res), err => reject(this.err))
  } else {
    console.log(x, 'x')
    resolve(x)
  }
}

module.exports = MyPromise