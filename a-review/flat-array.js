// 回顾Array.prototype.flat(num)的方法
// num默认为1， 代表只拉平一层
// 需要返回一个数组，该数组为拉平后的值
Array.prototype.myFlat = function (num = 1) {
  let resArr = []
  function fn (arr, num) {
    console.log(num, 'nummmm')
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && num > 0) {
        fn(arr[i], --num)
      } else {
        resArr.push(arr[i])
      }
    }
  }
  fn(this, num)
  return resArr
}

// 不用原型
// function myFlat (arr, num = 1) {
//   let resArr = []
//   function fn (arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//       if (Array.isArray(arr[i]) && num > 0) {
//         fn(arr[i], num - 1)
//       } else {
//         resArr.push(arr[i])
//       }
//     }
//   }
//   fn(arr, num)
//   return resArr
// }
let arr = [1, 2, 3, [4, 5, [6, 7], 8], 9]
// console.log(myFlat(arr, 1))
console.log(arr.myFlat())