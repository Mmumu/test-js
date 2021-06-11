// 将嵌套的数组拉平
/**
 * 
 * @param {*} arr 将要拉平的数组
 * @param {*} num 设置将多少层的嵌套“拉平”
 * 1、遍历传入的数组arr，判断该数组的值是否为数组
 * 2、
 */
// function flat(arr, num = 1) {
//   let res = []
//   // 若是数组，则需要判断num的值，看需要拉平多少层
//   let _flat = function (array) {
//     num--
//     for(let i = 0; i < array.length; i++) {
//       if (Array.isArray(array[i]) && num > -1) {
//         _flat(array[i])
//       } else {
//         // 普通值直接push进新数组
//         res.push(array[i])
//       }
//     }
//   }
//   _flat(arr)
//   return res
// }

function flat(arr, num = 1) {
  let res = []
  // 若是数组，则需要判断num的值，看需要拉平多少层
  num--
  for(let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && num > -1) {
      // 递归调用flat
      res = res.concat(flat(arr[i], num))
    } else {
      // 普通值直接push进新数组
      res.push(arr[i])
    }
  }
  return res
}
console.log(flat([1, 2, [3, 4, [5, 6, 7]]], 1), 'res')