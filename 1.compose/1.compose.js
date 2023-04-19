// 源文档
// https://juejin.cn/post/6968713283884974088#heading-1
// 在函数式编程当中有一个很重要的概念就是函数组合，
// 实际上就是把处理数据的函数像管道一样连接起来，
// 然后让数据穿过管道得到最终的结果。
// https://juejin.cn/post/6844904160765149192
// 用法如下:
function fn1 (x) {
  return x + 1;
}
function fn2 (x) {
  return x + 2;
}
function fn3 (x) {
  return x + 3;
}
function fn4 (x) {
  return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
const b = compose(fn1);
// console.log(a(1)); // 1+4+3+2+1=11
console.log(b(0));


function compose (...fn) {
  // console.log(fn)
  if (!fn.length) return (v) => v;
  if (fn.length === 1) return fn[0]
  // console.log(fn)
  return fn.reduce((result, it) => {
    // console.log(result, it)
    return (...args) => {
      return result(it(...args))
    }
  }, (it) => it)
}


// 手写答案
// function compose (...fn) {
//   return fn.reduce((result, it) => {
//     return (...args) => {
//       return result(it(...args))
//     }
//   }, (it) => it)
// }


