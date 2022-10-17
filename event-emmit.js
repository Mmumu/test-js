// 发布订阅者模式
class EventEmmit {
  // 需要定义一个事件中心，讲
  constructor() {
    // {'eventType': [fn1, fn2], 'eventType2': [fn3, fn4]}
    this.eventArr = {}
  }
  $on(clickType, callBack) {
    if (this.eventArr.clickType) {
      this.eventArr.clickType.push(callBack)
    } else {
      this.eventArr.clickType = [callBack]
    }
  }
  $emmit(eventType) {
    for(let i = 0; i < this.eventArr[eventType].length; i++) {
      this.eventArr[eventType][i]()
    }
  }
}
// 调用方式
var eventEmmit = new EventEmmit()
eventEmmit.$on('click', function() {

})
eventEmmit.$emmit('click')
