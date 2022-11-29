// 使用Object的各种方法

let obj = {
  name: 'xxx',
  age: 18,
  sex: 'man'
}

// Object静态方法
// 1、Objetc.keys() / Object.values() / Object.entries()
// console.log(Object.keys(obj), 'Object.keys')
// console.log(Object.values(obj), 'Object.values')
// console.log(Object.entries(obj), 'Object.entries')

// for of 遍历数组
// for (const [value, name] of Object.entries(obj)) {
//   console.log(value, 'value')
//   console.log(name, 'name')
// }

// 2、Object.getOwnPropertyNames() 获取对象的属性，和Object.keys()类似
// 区别是，Object.getOwnPropertyNames()能获取到非迭代性属性，Object.keys()只能获取迭代型属性
// console.log(Object.getOwnPropertyNames(obj), 'Object.getOwnPropertyNames()')

// 3、Object.getOwnPropertyDescriptor(o, p) 获取对象的描述属性
/**
 * @param o -- Object that contains the property
 * @param p -- Name of the property
 * @return PropertyDescriptor
 */
// console.log(Object.getOwnPropertyDescriptor(obj, 'name'), 'Object.getOwnPropertyDescriptor()')

// 4/Object.getOwnPropertyDescriptors() 获取指定对象所有自身属性的描述对象（非继承属性）
/**
 * @param o -- Object that contains the property
 * @return 返回一个对象，该对象的值为obj的属性名，值为该属性名的描述对象
 */
// console.log(Object.getOwnPropertyDescriptors(obj), 'Object.getOwnPropertyDescriptors()')
// {
//   name: {
//     value: 'xxx',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   age: { value: 18, writable: true, enumerable: true, configurable: true },
//   sex: {
//     value: 'man',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }

// 5、Object.defineProperty(o, p) 定义对象某个属性的描述对象的值
/**
 * @param o -- Object on whice to add or modify the properties.this can be a native JavaScript object or a DOM object
 * @param p -- The property name
 * @param attributes -- Descriptor for the property.It can be for a data property or an accessor property
 */
// Object.defineProperty(obj, 'name', {
//   enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptors(obj), 'Object.getOwnPropertyDescriptors()')
// console.log(Object.getOwnPropertyNames(obj))
// console.log(Object.keys(obj))

// 6、Object.defineProperties(o, p) 定义整个对象属性的描述对象的值
/**
 * @param o -- Object on which to add or modify the properties.This can be a native JavaScript object or a DOM object
 * @properties -- JavaScript object that contains one or more descriptor objects
 */
// Object.defineProperties(obj, {
//   'name': {
//     enumerable: true
//   }
// })
// console.log(Object.getOwnPropertyNames(obj))
// console.log(Object.keys(obj))

// 7、Object.create() 以某个对象为原型创建对象
/**
 * @param o -- Object to use as a prototype.May be null
 */
// var obj2 = Object.create(obj)
// console.log(obj, 'obj')
// console.log(obj2.__proto__, 'obj2')
// console.log(obj2.__proto__ === obj)

// 8、Object.assign() 复制对象到目标对象中
/**
 * @param target -- The target object to copy to.
 * @param source -- The source object from which to copy properties.
 */
// var target = {}
// var obj2 = Object.assign(target, {
//   name: 'name',
//   age: 19
// }, {
//   sex: '男'
// })
// console.log(obj2, 'obj2')
// console.log(target, 'target')

// 9、Object.is()
/**
 * @param value1 -- The first value
 * @param value2 -- The second value
 */
// var obj2 = obj
// var is = Object.is(obj, obj2)
// console.log(is, 'is')

// 10、Object.getPrototypeOf() 获取对象的原型对象
// var obj2 = Object.create(obj)
// console.log(Object.getPrototypeOf(obj2), 'Object.getPrototypeOf')

// 11、Object.fromEntries() 将一个键值对数组转化成对象
/**
 * @param entries -- An iterable object that contains key-value entries for properties
 */
// var arr = [['name', 'xxx'], ['age', 19]]
// console.log(Object.fromEntries(arr), 'Object.fromEntries')

// 2022-10-30
// Object的静态方法
// 获取对象上属性的描述对象 Object.getOwnPropertyDescriptor()
console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
// 获取对象上所有属性 Object.keys()/
console.log(Object.keys(obj))
console.log(Object.getOwnPropertyNames(obj))

// 定义对象上属性的描述属性 Object.defineProperty
// Object.defineProperty(obj, 'name', {
//   // value: 333,
//   get() {
//     console.log('有人要来拿name了！！！！')
//     return this.name
//   },
//   set (v) {
//     console.log('触发存取器了！！！')
//   }
// })
// obj.name = 'hahaha'
// console.log(obj.name)


// 写法二
var o = {
  pVla : '',
  get p() {
    return this.pVla;
  },
  set p(value) {
    this.pVla = value
    console.log('setter: ' + value);
  }
};
o.p = 2
console.log(o.p, 'kkk')
console.log(Object.getPrototypeOf(Function))
