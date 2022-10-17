// 深拷贝
// 0、先判断target是否是一个对象或者function（这里排除了基本数据类型的值），不是的话直接返回
// 1、利用递归，重复调用方法，克隆目标对象的属性
// 2、利用map去处理对象中重复引用的问题，因为重复引用会造成递归方法无限执行，内存溢出
// 3、区分目标对象属性的类型，分别有Object、Array、Map、Set
// 4、
const isObject = function (target) {
  return (typeof target === 'object' || typeof target === 'function') && typeof target !== null
} 
const deepClone = function (target, map = new Map()) {
  // 这里判断是否为对象或者function，不是的话证明是基本类型值，直接返回
  if (!isObject(target)) {
    return target
  }
  let cloneTarget
  // 这里判断是否有重复引用了，是的话，直接返回，不是的话做好该target的标记
  if (map.get(target)) {
    // 如果map发现已经有target了，则直接返回，以防重复调用造成内存溢出
    return target
  }
  map.set(target, true)

  // 判断是对象还是数组，来定义一个返回值
  // [object Object]/[object Array]/[object Map]/[object Set]
  let targetType = Object.prototype.toString.call(target)
  if (targetType === '[object Object]' || targetType === '[object Array') {
    // 这里是数组和对象的处理方法
    for (const prop in target) {
      if (Object.hasOwnProperty.call(target, prop)) {
        console.log(target[prop], 'prop')
        cloneTarget[prop] = deepClone(target[prop])
      }
    }
    return cloneTarget
  } else if (targetType === '[object Map]') {
    target.forEach((item, key) => {
      // map的属性值也有可能是对象或者数组，所以属性也要deepClone
      cloneTarget.set(deepClone(key, map), deepClone(item, map));
    })
  } else if(targetType === '[object Set]') {
    //处理Set
    target.forEach(item => {
      cloneTarget.add(deepClone(item, map));
    })
  }
}
const target = {
  name: 'xxx',
  age: 18
}
// target.self = target
let obj = deepClone(target)
obj.name = '123'
console.log(obj, 'obj')
console.log(target, 'target')
