let treeRes = [];

function tree2arr (res) {
  res.forEach(item => {
    if (!item.children) {
      treeRes.push(item)
    } else {
      tree2arr(item.children)
    }
  })
}
// 此处的res取的是上边的数组转树的结果
tree2arr(res)
console.log(treeRes);
