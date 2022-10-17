// ES5的继承
function Person (name, age) {
  // 实例方法定义方式
  this.name = name
  this.age = age
}
// 设置静态方法
Person.eat = function () {
  // 静态方法定义方式
  console.log(this, 'this')
}
Person.sex = '男'

// 给prototype设置方法和属性
Person.prototype.run = function () {
  console.log(this.name + ' is running')
}
console.log(Person, 'Person')

// 写一个学生类，继承Person
// 1、首先要继承Person的实例属性和方法,Person.call(this)
// 2、其次要继承Person类上原型对象上的实例属性和方法，Student.prototype = Object.create(Person.prototype)
// 3、要讲Student类的原型对象的constructor指向Student本身
function Student (name, age, num) {
  Person.call(this, name, age)
  this.num = num
}
Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student

var s = new Student('学生1', 14, 01)
console.log(s.run())

// new 的作用
// 1、生成了一个新对象obj
// 2、将类的原型对象prototype复制给该对象obj.__proto__
// 3、将该对象obj赋值给this
// 4、执行类的js代码
// 5、若该类没有return 对象的语句，则返回该this
// let p = new Person('xiaoming', 18)
// p.run()



