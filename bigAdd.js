// 数组的算法有上限，突破上限的数字运算，可以使用字符串实现
// 思路：
// 0、参数以字符串的形式传入，也以字符串的形式return
// 1、从字符串尾部开始遍历
// 2、同位置的字符相加，和大于等于10的，记录往前进一位f，在下一个位数运算时记得加上f
// 3、遍历完成后，判断最长的数组是否
function bigAdd (p1, p2) {
  const len = Math.max(p1.length, p2.length)
  p1 = p1.padStart(len, '0')
  p2 = p2.padStart(len, '0')
  // sum记录计算的结果
  let sum = ''
  // f用来记录是否进1
  let f = 0
  // t用来记录每一轮相加的结果
  let t = 0
  for(let i = len; i > 0; i--) {
    // 每一轮相加的结果
    t = parseInt(p1[i - 1]) + parseInt(p2[i - 1]) + f
    // 进1的结果在下一轮相加要加上
    f = Math.floor(t / 10)
    // 每次sum都等于此次的各位结果和上一次的sum相加
    sum = t % 10 + sum
  }
  // 最后一轮相加，若需要进1，则相加
  return f === 1 ? '1' + sum : sum
}
let sum = bigAdd('123245345367889709', '22345212421345465675')
console.log(sum)