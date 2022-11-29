// call的实现
// Function.prototype.call2 = function(obj, ...arg) {
//   console.log(obj, 'objsss')
//   console.log(this, 'thissss')
//   obj.fn = this
//   obj.fn(arg)
// }
// var a = '这是window的a'
// var obj = {
//   a: '这是obj的a'
// }
// function fn () {
//   console.log(this.a, 'fn打印的a')
// }
// fn.call2(obj)

// 防抖
/**
 * 1、用户点击多次，只能生效一次（开头或者结尾）
 * 2、设置在一定的时间内，用户点击多次，只生效一次
 * 3、执行一次传入的方法
 */
// function debounce(fn, time) {
//   if (timer) return
//   let timer = setTimeout(() => {
//     fn()
//   }, time)
// }


/**
 * Promise
 * 1、Promise构造函数接受一个方法参数，方法又接受两个方法
 * 2、有三种状态：pending/fulfilled/rejected
 *  */
// class Promise2{
//   state = 'PENDING'
//   successCallbackArr = []
//   failCallbackArr = []
//   constructor(fn) {
//     // 这里的this等于new这个类的实例
//     fn(this.resolve, this.reject)
//   }
//   then(successCallback, failCallback) {
//     console.log(successCallback, 'kkkk')
//     this.successCallbackArr.push(successCallback)
  
//     this.failCallbackArr.push(failCallback)

//   }
//   resolve = () => {
//     // resolve这个方法，是由外部调用的，但是class是strict模式，所以this位undefined
//     if (this.state === 'PENDING') {
//       this.state = "FULLFILED"
//       console.log(this.successCallbackArr, 'llll')
//       this.successCallbackArr.shift()()
//     }
//   }
//   reject = () => {
//     if (this.state === 'PENDING') {
//       this.state = "REJECTED"
//       this.failCallbackArr.shift()()
//     }
//   }
// }
// let promise = new Promise2((resolve, reject) => {
//   // 执行异步操作
//   setTimeout(() => {
//     resolve()
//   }, 1000)
// })
// promise.then(() => {
//   console.log('这个是成功的回调函数！')
// }, () => {
//   console.log('这个是失败了')
// })

/**
 *  防抖函数
 * 1、返回一个函数
 * func (Function): 要防抖动的函数。
 * [wait=0] (number): 需要延迟的毫秒数。
 * [options.leading=false] (boolean): 指定在延迟开始前调用。
 * [options.maxWait] (number): 设置 func 允许被延迟的最大值。
 * [options.trailing=true] (boolean): 指定在延迟结束后调用。
 */
// function debounce (func, wait = 0) {
//   console.log(this, 'debounce this')
//   let timer = null
//   function debounced () {
//     clearTimeout(timer)
//     console.log(this, 'debounced this')
//     console.log(arguments, 'arguments000')
//     timer = setTimeout(() => {
//       console.log(this, 'settimeout this')
//       console.log(arguments, 'arguments')
//       func(...arguments)
//     }, wait)
//   }
//   return debounced
// }

// function fn(a, b) {
//   console.log(this, 'fn this')
//   console.log(a, 'aaaa')
//   console.log(b, 'bbbb')
// }
// let d = debounce(fn, 1000)
// for (let i = 0; i < 1; i++) {
//   d('1', '2')
// }
/**
 * symbol
 */
// const s1 = Symbol()
// const s2 = Symbol()
// console.log(s1 === s2)
// console.log(s1)
// console.log(typeof s1)
// let o = {}
// const s3 = Symbol('s3')
// o[s3] = 'kkk'
// console.log(o)
// console.log(o[s3])

// const COLOR_RED    = Symbol('1');
// const COLOR_GREEN  = Symbol('2');
// function getComplement(color) {
//   switch (color) {
//     case COLOR_RED:
//       return COLOR_RED;
//     case COLOR_GREEN:
//       return COLOR_GREEN;
//     default:
//       throw new Error('Undefined color');
//     }
// }
// console.log(getComplement(COLOR_RED))

const shapeType = {
  triangle: Symbol()
};
function getArea(shape, options) {
  let area = 0;
  switch (shape) {
    case shapeType.triangle:
      area = .5 * options.width * options.height;
      break;
  }
  console.log(area)
}
getArea(shapeType.triangle, { width: 100, height: 100 });