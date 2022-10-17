// 写一个方法，fn(obj)
let obj = {
  'a': {
    'b': 1,
    'c': 2,
    'e': {
      'f': {
        'g': 3,
        'h': {
          'i': 0
        }
      }
    }
  },
  'd': '22'
}
// 得到如下结果：
// obj{
//   'a.b': 1,
//   'a.c': 2,
//   'a.b.e.f': 1,
//   'd': '3'
// }


function fn(object) {
  let cache = {}
  /**
   * 
   * @param {*} object 要排平的对象
   * @param {*} preItem 该对象上一层对象的属性值
   */
  function fn1(object, preItem) {
    for (let item of Object.keys(object)) {
      if (Object.prototype.toString.call(object[item]) === '[object Object]') {
        preItem ? fn1(object[item], `${preItem}.${item}`) : fn1(object[item], item)
      } else {
        preItem ? cache[`${preItem}.${item}`] = object[item] : cache[item] = object[item]
      }
    }
  }
  fn1(object)
  return cache
}
console.log('排平结果：', fn(obj))