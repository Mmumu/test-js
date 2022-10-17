// 节流
// 1、在一定的时间内，方法触发多次，需要节流
// 2、节流的意思就是多次方法在规定时间内触发时，我们只让一次方法执行，其他的失效
var throttle = function (fn, wait) {
  let timer = null
  return function() {
    if (!timer) {
      let arg = arguments
      timer = setTimeout(() => {
        fn(arg)
        clearTimeout(timer)
      }, wait)
    }
  }
}

// 调用方式
var handle = function (arr) {
  console.log('这个是要执行的函数', arr)
  console.log('this', this.de)
}
var th = throttle(handle, 500)
let count = 0
let t = setInterval(() => {
  if (count < 3) {
    count++
    th([1, 2, 3])
  } else {
    clearInterval(t)
  }
}, 100)