// 回顾防抖功能
// 1、防抖主要是限制方法，在一个时间周期内，只能按最后触发事件那一次为准
// 2、方法需要传入一个回调方法，
function debounce (fn, wait) {
  let t
  return function (...arg) {
    clearTimeout(t)
    t = undefined
    t = setTimeout(() => {
      fn(...arg)
    }, wait)
  }
}
// 模拟多次点击事件
function handle (x, y) {
  console.log(x + y, 'x + y')
}
const fn = debounce(handle, 1000)
let count = 0
let t = setInterval(() => {
  if (count < 3) {
    fn(1, 3)
    count++
  } else {
    clearInterval(t)
  }
}, 100)