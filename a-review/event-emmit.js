// 回顾发布订阅者模式的使用
// 1、发布订阅者模式有个事件中心sub，记录着监听事件触发后所要执行的事件
// 2、$on用来监听事件，$emit用来触发事件
// 3、一个事件可以多次被监听
class EventEmmit {
  constructor () {
    // 格式：{'clickType': [fn1, fn2], 'changeType': [fn3]}
    this.sub = {}
  }
  $on (eventType, fn) {
    // 判断sub中有了该事件，则直接在事件数组中添加
    // 如果没有，则创造sub对象新属性
    if (this.sub.hasOwnProperty(eventType)) {
      this.sub[eventType].push(fn)
    } else {
      this.sub[eventType] = [fn]
    }
  }
  $emit(eventType) {
    this.sub[eventType].forEach((fn, index) => {
      fn()
    })
  }
}

// 使用方式
let e = new EventEmmit()
e.$on('eventType1', (...arg) => {
  console.log('eventType1事件出发了')
  console.log('eventType1参数：', arg)
})
e.$on('eventType1', (...arg) => {
  console.log('eventType1事件出发了')
  console.log('eventType1参数：', arg)
})
e.$emit('eventType1')