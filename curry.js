// 1、科里化函数
// 2、若传入的参数足够，则科里化函数直接执行传入的参数函数
// 3、若传入的参数不够，则返回一个函数，继续接手传入参数函数的参数，直到足够就执行传入的参数函数
// =============================================================================================
// function curry (fn) {
//   return function waitParam (...arg1) {
//     if (arg1.length < fn.length) {
//       // 若参数不足够，则需要返回一个函数，等待其他的函数传入，递归
//       return function(...arg2) {
//         return waitParam(...arg1, ...arg2)
//       }
//     } else {
//       // 若参数数量足够了，则直接执行传入的参数函数
//       return fn(...arg1)
//     }
//   }
// }
// =============================================================================================
// function curry (fn) {
//   let paramArr = []
//   return function waitParam (...arg1) {
//     paramArr = paramArr.concat(arg1)
//     console.log(paramArr, 'paramArr')
//     console.log(fn.length, 'fn.length')
//     console.log(!!(paramArr.length < fn.length))
//     if (paramArr.length < fn.length) {
//       // 若参数不足够，则需要返回这个函数，等待其他的函数传入，递归
//         return waitParam
//     } else {
//       // 若参数数量足够了，则直接执行传入的参数函数
//       return fn(...paramArr)
//     }
//   }
// }
// =============================================================================================
const curry = (fn, ...args) => 
    // 函数的参数个数可以直接通过函数数的.length属性来访问
    args.length >= fn.length // 这个判断很关键！！！
    // 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
    ? fn(...args)
    /**
     * 传入的参数小于原始函数fn的参数个数时
     * 则继续对当前函数进行柯里化，返回一个接受所有参数（当前参数和剩余参数） 的函数
    */
    : (..._args) => curry(fn, ...args, ..._args);

// 写一个相加的函数
function sum (p1, p2, p3, p4) {
  return p1 + p2 + p3 + p4
}
let fn = curry(sum)
console.log(fn(1)(2), 'fnnnn')
console.log(fn(1, 2, 3)(4), 'fnnnn')