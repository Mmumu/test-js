// map方法将数组的所有成员依次传入参数函数，然后把每一次的执行结果组成一个新数组返回
// var numbers = [1, 2, 3];
// numbers.map(function (n) {
//   return n + 1;
// });
// // [2, 3, 4]
// numbers
// // [1, 2, 3]
Array.prototype.myMap = function(fn, thisArg) {
  let arr = []
  for(let i = 0; i < this.length; i++) {
    arr.push(fn.call(thisArg, this[i]))
  }
  return arr
}
var fn = function (n) {
  return n + 1
}
console.log([1, 2, 3].myMap(fn))
