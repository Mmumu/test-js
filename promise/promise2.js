// Promise的调用方式
// let p = new Promise((resolve, reject) => {
//   // 下面执行异步操作
//   setTimeout(() => {
//     resolve()
//   }, 0)
// })
// p.then((res) => {
//   console.log(res, 'res')
// }, (error) => {
//   console.log(error, 'error')
// })
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'
class MyPromise {
  statue = PENDING
  res = ''
  error = ''
  successCallback = []
  failCallback = []
  constructor (exector) {
    exector(this.resolve, this.reject)
  }
  resolve = (res) => {
    if (this.statue === 'PENDING') {
      this.statue = FULFILLED
      this.res = res
      while(this.successCallback.length) {
        this.successCallback.shift()(this.res)
      }
    }
  }
  reject = (error) => {
    if (this.statue === 'PENDING') {
      this.statue = REJECTED
      this.error = error
      while(this.failCallback.length) {
        this.failCallback.shift()(this.error)
      }
    }
  }
  then (successCallback, failCallback) {
    let p2 = new MyPromise((resolve, reject) => {
      if (this.statue === FULFILLED) {
        let x = successCallback(this.res)
        resolvePromise(x, resolve, reject)
      } else if (this.statue === REJECTED) {
        failCallback(this.error)
        resolvePromise(x, resolve, reject)
      } else {
        // 这里处理异步的场景，可能执行到这里的时候，statue的状态还是PENDING，
        // 这个时候要将successCallback和failCallback储存起来
        // this.successCallback.push(successCallback)
        // this.failCallback.push(failCallback)
        this.successCallback.push(() => {
          let x = successCallback(this.res)
          resolvePromise(x, resolve, reject)
        })
        this.failCallback.push(() => {
          let x = failCallback(this.error)
          resolvePromise(x, resolve, reject)
        })
      }
    })
    return p2
  }
  finally (callback) {
    
  }
  catch (failCallback) {
    return this.then(undefined, this.failCallback)
  }
  static all (arr) {
    let result = [], count = 0
    return new MyPromise((resolve, reject) => {
      let ifDone = function () {
        if (count === arr.length) {
          resolve(result)
        }
      }
      for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        if (current instanceof MyPromise) {
          current.then(res => {
            result[i] = res
            count++
            ifDone()
          }, error => reject(error))
        } else {
          result[i] = arr[i]
          count++
          ifDone()
        }
      }
    })
  }
  static resolve (value) {
    if (value instanceof MyPromise) {
      return value
    }
    return new MyPromise((resolve) => {
      resolve(value)
    })
  }
}

function resolvePromise(x, resolve, reject) {
  if (x instanceof MyPromise) {
    x.then(value => resolve(value), reason => reject(reason))
  } else {
    resolve(x)
  }
}


module.exports = MyPromise