// 防抖
// 1、防抖主要处理用户不消息点击多次的场景
// 2、若用户在规定的时间内，触发多次事件，我们将它视为一次触发，以最后一次触发为准
// 3、需要定时器，规定时间内做处理，需要维护一个定时器变量，看当前是否已经有定时器生成
// var debounce = function (fn) {
//   return function () {
//     let timer = null
//     clearTimeout(timer)
//     const args = arguments
//     console.log(args, 'arges')
//     const that = this
//     timer = setTimeout(() => {
//       fn.call(that, args)
//     }, 1000)
//   }
// }

// let d = debounce(function(array) {
//   console.log('0000')
// })
// d([1, 2, 3])
// d([1, 2, 3])
// d([1, 2, 3])


// 防抖
function debounce (fn, wait) {
  let timer = null
  return function () {
    clearTimeout(timer)
    const args = arguments
    timer = setTimeout(() => {
      fn.call(undefined, args)
    }, wait)
  }
}

// 调用方式
var handle = function (arr) {
  console.log('这个是要执行的函数', arr)
  console.log('this', this.de)
}
// handle([1,2 , 3])

var de = debounce(handle, 500)
let count = 0
let t = setInterval(() => {
  if (count < 3) {
    count++
    de([1, 2, 3])
  } else {
    clearInterval(t)
  }
}, 100)
