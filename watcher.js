// 回顾下观察者模式
// 1、需要有两个类，一个Dep类，有addSub方法，收集Watcher类的实例（依赖），
// 2、Dep类里还需要有notify方法，触发addSub里面的Watcher实例去执行实例里的方法
// 3、一个Watcher类，里面包含需要触发的方法

class Dep {
  constructor () {
    this.subArr = []
  }
  addSub (watcher) {
    if (sub && sub.update) {
      this.subArr.push(watcher)
    }
  }
  notify (...arg) {
    for (let i = 0; i < this.subArr.length; i++) {
      this.subArr[i].update(...arg)
    }
  }
}

class Watcher {
  update (...arg) {
    console.log('walk方法已触发', arg)
  }
}

// 使用方式
const dep = new Dep()
const watcher1 = new Watcher()
const watcher2 = new Watcher()
// 1、Dep收集依赖
dep.addSub(watcher1)
dep.addSub(watcher2)
// 2、Dep触发依赖
dep.notify(1, 2)
