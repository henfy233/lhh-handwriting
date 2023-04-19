const simulateSetInterval = (func, timeout) => {
  let timer = null
  const interval = () => {
    timer = setTimeout(() => {
      func()
      interval()
    }, timeout)
  }

  interval()
  return () => clearTimeout(timer)
}

// 调用函数
const cancel = simulateSetInterval(() => {
  console.log(1)
}, 300)

setTimeout(() => {
  cancel()
}, 1000)
