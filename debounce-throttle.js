// 防抖：将多次高频操作优化为只在最后一次执行，例如：输入场景
// return的方法触发后，若在wait的时间内再触发，则清除掉timer，重新计时
// 高频操作的方法，需通过debounce方法处理后再执行
/**
 * fn 需要回调的高频操作方法
 * wait 需要等待的时间
 */
// function debouncece (fn, wait) {
//   // 1、将fn放入一个定时器中，需要等待一定的时间wait才能执行该fn
//   // 2、若wait的时间没等待完，fn若再次触发，则清除该定时器，重新定义一个定时器
//   // 3、回调函数fn需要传参，所以最好return一个方法回去
//   return function () {
//     const args = arguments
//     const that = this
//     let timer = null
//     timer = setTimeout(() => {
//       fn.call(that, args)
//     }, wait)
//   }
// }

// //模拟ajax请求
// function ajax(content) {
//   console.log('ajax request ' + content)
// }
// let inputDebounce = document.getElementById('debounce')
// let debounceAjax = debouncece(ajax, 500)
// inputDebounce.addEventListener('keyup', function (e) {
//   debounceAjax(content)
// })


// 节流：每隔一段时间执行一次方法，降低频率，例如：滚动事件或者resize事件
// return的方法触发后，则一定要执行完该定时器，再将定时器清理掉，若在wait的时间内再触发，则不执行fn
/**
 * 
 * @param {*} fn 需要回调的高频操作方法
 * @param {*} wait wait 需要等待的时间
 * @returns 
 */
function throttle (fn, wait) {
  let timer = null
  return function () {
    if (!timer) {
      const args = arguments
      const that = this
      setTimeout(() => {
        fn.call(that, args)
        // 执行完后将timer清掉
        timer = null
      }, wait)
    }
  }
}