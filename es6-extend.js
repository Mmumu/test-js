class Person {
  // 定义实例属性方式1
  name = ''
  age = ''
  constructor(name, age) {
    // 定义实例属性方式2
    this.name = name
    this.age = age
  }
  // 定义prototype上的属性和方法
  run() {
    console.log(this.name + ' is running')
  }
  // 定义静态方法
  // 静态方法的this，指的是类，而不是实例
  static eat() {
    console.log('这个类会eat的方法')
  }
  // 设置getter setter 方法
  get prop() {
    return this.name
  }
  set prop(value) {
    console.log('setter:' + value)
  }
}
// 定义静态属性方式
Person.sex = '男'
// console.log(Person.sex, 'sex')

var p = new Person('xiaoming', 18)
console.log(p.prop)

// 写一个Student类继承Person
class Student extends Person {
  constructor(name, age, num) {
    super(name, age)
    this.num = num
  }
}
var s = new Student('学生', 14, 01)
s.run()
