function Stack () {
  this.items = []
  Stack.prototype.push = function(ele) {
    this.items.push(ele)
  }
}

let s = new Stack()
s.push(2)
console.log(s, 'sss')
s.items.shift()
console.log(s, 'ss22s')