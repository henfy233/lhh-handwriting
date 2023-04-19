let timer = setTimeout(() => {
  console.log(timer)
  clearTimeout(timer)
  console.log(timer)
}, 1000)
console.log(timer)


