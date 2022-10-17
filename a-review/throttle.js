// 回顾节流的使用
// 1、例如在滚动时，会一直触发滚动的事件handle，需要触发handle这个事件，限制在一定的频率
// 2、throttle方法主要是传入一个方法和一个触发事件频率的时间
function throttle (fn, wait) {
  let t
  return function (...arg) {
    if (t) {
      return 
    }
    t = setTimeout(() => {
      fn(...arg)
      clearTimeout(t)
      t = undefined
      console.log(t, 't')
    }, wait)
  }
}
// 模拟调用节流thrttle方法
function handle (x, y) {
  console.log(x + y, 'x + y')
}
const fn = throttle(handle, 1000)
let count = 0
const timer = setInterval(() => {
  if (count < 12) {
    fn(1, 2)
    count++
  } else {
    clearInterval(timer)
  }
}, 100)