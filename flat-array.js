// 创建一个flat方法将数组拍平
// 1、接收一个数组参数array，一个拍平深度参数num
// 2、创建一个数组，将拍平后的数组返回
// 3、遍历数组array，看里面的值是否还是数组

let fn = function (array, num = 1) {
  let resArr = []
  function fn2 (array, num) {
    for(let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]) && num > 0) {
        fn2(array[i], num - 1)
      } else {
        resArr.push(array[i])
      }
    }
  }
  fn2(array, num)
  return resArr
}

console.log(fn([1, 2, [3, 4, [5, 6]], 7, 8], 2))