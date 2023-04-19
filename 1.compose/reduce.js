// reduce 用法

let arr = [10, 20, 30, 40]
// result = arr.reduce((prev, cur, index, arr) => {
//   console.log(prev, cur, index)
//   return prev + cur
// })
result = arr.reduce((N, item) => {
  // 第一次：10 20
  // 第二次：30 30
  // 第三次: 60 40
  // ...
  // reduce只传递一个回调函数，
  // 那么N第一次默认是第一项，
  // 后续的N是上一次函数执行的处理结果
  console.log(N, item);
  return N + item;
});
console.log(result);

result = arr.reduce((N, item) => {
  console.log(N, item);
  return N + item;
}, 0);
//=>REDUCE的第二个参数就是给N赋值的初始值
// ITEM从数组第一项开始遍历
console.log(result);
