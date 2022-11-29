/**
 * 链表要有一个head，指向链表的第一个数据
 * 链表的每个数据，都有一个next属性，指向链表的下一个数据
 * 常用操作：
 * 1、addpend(element)：想链表尾部添加一个新的数据
 * 2、insert(position,element)：向链表特定位置插入一个新的数据
 * 3、get(position)：获取对应位置的元素
 */
function LinkList() {
  this.head = null
  LinkList.prototype.append = function(element) {
    if (this.head == null) {
      this.head = {
        element: element,
        next: null
      }
    } else {
      var current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = {
        element: element,
        next: null
      }

    }
  }
  LinkList.prototype.toString = function(){
    var current = this.head, str = ''
    if (current) {
      str = current.element + " "
    }
    while (current.next) {
      current = current.next
      str += current.element + " "
    }
    return str
  }
}

// 链表的使用
var link = new LinkList()
link.append('kkk')
link.append('kkk2')
link.append('kkk23')
link.append('kkk233')
console.log(link.toString())