// 需要通过链式调用call1，所以call1需要定义在Function的prototype上
Function.prototype.call1 = function (obj) {
  const arr = Array.prototype.slice.call(arguments)
  arr.splice(0, 1)
  // const arr = [].slice.call(arguments, 1)
  
  console.log(arr, 'arg')
  // 处理参数，第一个参数是传入的方法，第二个参数开始属于fn需要用到的参数
  // 利用链式调用call1，如xxx.call1()，则this === xxx
  obj.fn = this
  obj.fn(arr)
  delete obj.fn
}

var foo = {
  value: 1
}

function bar () {
  console.log(this.value)
  // console.log(arguments)
}

bar.call1(foo, 1, 2)