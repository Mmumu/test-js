/**
 * 1、es6的模块是（编译时加载）静态加载的。CommonJS是动态引入的。
 * 2、静态加载时，说明import会先于模块内其他代码先执行。
 * 3、import()方法可以用于动态加载，返回的是一个Promise
 * 4、es6模块，export出来的不是对象，而是一个类似接口的定义。
 * 5、因为export出来的是接口，如果export的值变了，import该值也会改变
 */
// let n = 1
// function changeN() {
//   n++
// }
// export {n, changeN}
import {bar} from './b.mjs';
console.log('a.mjs');
console.log(bar);
var foo = 'foo'
export {foo};
