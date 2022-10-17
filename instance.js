// 判断左边值的原型是否为右边
// leftValue instanceOf rightValue === true
// leftValue.__proto__ === rightValue.prototype
function instance (leftValue, rightValue) {
  rightValue = rightValue.prototype
  leftValue = leftValue.__proto__
  while (true) {
    if (leftValue === null) {
      return false
    }
    if (leftValue === rightValue) return true
    leftValue = leftValue.__proto__
  }
}

let obj = new Object({})
console.log(instance(obj, Array))