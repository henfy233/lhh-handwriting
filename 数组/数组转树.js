let arr = [{
  "categoryCode": "90000",
  "categoryCnName": "A1级别",
  "bdictCode": "111",
  "bdictDesc": "测试1",
  "bparentCode": "0",
  "validStatus": "1"
}, {
  "categoryCode": "90000",
  "categoryCnName": "A1级别",
  "bdictCode": "222",
  "bdictDesc": "测试2",
  "bparentCode": "0",
  "validStatus": "1"
}, {
  "categoryCode": "90000",
  "categoryCnName": "A1级别",
  "bdictCode": "333",
  "bdictDesc": "测试3",
  "bparentCode": "0",
  "validStatus": "1"
}, {
  "categoryCode": "90000",
  "categoryCnName": "A1级别",
  "bdictCode": "444",
  "bdictDesc": "测试4",
  "bparentCode": "0",
  "validStatus": "1"
}, {
  "categoryCode": "90000",
  "categoryCnName": "A1级别",
  "bdictCode": "555",
  "bdictDesc": "测试5",
  "bparentCode": "0",
  "validStatus": "1"
}, {
  "categoryCode": "90000",
  "categoryCnName": "A1级别",
  "bdictCode": "DOCA",
  "bdictDesc": "测试6",
  "bparentCode": "0",
  "validStatus": "1"
}, {
  "categoryCode": "90000",
  "categoryCnName": "A1级别",
  "bdictCode": "DOCA01",
  "bdictDesc": "测试7",
  "bparentCode": "DOCA",
  "validStatus": "1"
}, {
  "categoryCode": "90000",
  "categoryCnName": "A1级别",
  "bdictCode": "DOCA0101",
  "bdictDesc": "测试8",
  "bparentCode": "DOCA01",
  "validStatus": "1"
}, {
  "categoryCode": "90000",
  "categoryCnName": "A1级别",
  "bdictCode": "DOCA0102",
  "bdictDesc": "测试9",
  "bparentCode": "DOCA01",
  "validStatus": "1"
}, {
  "categoryCode": "90000",
  "categoryCnName": "A1级别",
  "bdictCode": "DOCA0103",
  "bdictDesc": "测试10",
  "bparentCode": "DOCA01",
  "validStatus": "1"
}, {
  "categoryCode": "90000",
  "categoryCnName": "A1级别",
  "bdictCode": "DOCA02",
  "bdictDesc": "测试11",
  "bparentCode": "DOCA",
  "validStatus": "1"
}, {
  "categoryCode": "90000",
  "categoryCnName": "A1级别",
  "bdictCode": "DOCA03",
  "bdictDesc": "测试12",
  "bparentCode": "DOCA",
  "validStatus": "1"
}, {
  "categoryCode": "90000",
  "categoryCnName": "A1级别",
  "bdictCode": "DOCA0301",
  "bdictDesc": "测试13",
  "bparentCode": "DOCA03",
  "validStatus": "1"
}, {
  "categoryCode": "90000",
  "categoryCnName": "A1级别",
  "bdictCode": "DOCA0302",
  "bdictDesc": "测试14",
  "bparentCode": "DOCA03",
  "validStatus": "1"
}, {
  "categoryCode": "90000",
  "categoryCnName": "A1级别",
  "bdictCode": "DOCA04",
  "bdictDesc": "测试15",
  "bparentCode": "DOCA",
  "validStatus": "1"
}, {
  "categoryCode": "90000",
  "categoryCnName": "A1级别",
  "bdictCode": "DOCA05",
  "bdictDesc": "测试16",
  "bparentCode": "DOCA",
  "validStatus": "1"
}, {
  "categoryCode": "90000",
  "categoryCnName": "A1级别",
  "bdictCode": "DOCA06",
  "bdictDesc": "测试17",
  "bparentCode": "DOCA",
  "validStatus": "1"
}, {
  "categoryCode": "90000",
  "categoryCnName": "A1级别",
  "bdictCode": "DOCA07",
  "bdictDesc": "测试18",
  "bparentCode": "DOCA",
  "validStatus": "1"
}, {
  "categoryCode": "90000",
  "categoryCnName": "A1级别",
  "bdictCode": "DOCA08",
  "bdictDesc": "测试19",
  "bparentCode": "DOCA",
  "validStatus": "1"
}, {
  "categoryCode": "90000",
  "categoryCnName": "A1级别",
  "bdictCode": "DOCA09",
  "bdictDesc": "测试20",
  "bparentCode": "DOCA",
  "validStatus": "1"
}, {
  "categoryCode": "90000",
  "categoryCnName": "A1级别",
  "bdictCode": "DOCA10",
  "bdictDesc": "测试21",
  "bparentCode": "DOCA",
  "validStatus": "1"
},]

// https://blog.csdn.net/m0_47135993/article/details/125957048

function arrayToTree (list, parentID) {
  const child = function (parentID) {
    const childs = []
    for (let i = 0; i < list.length; i++) {
      if (list[i].bparentCode == parentID) {
        if (child(list[i].bdictCode).length > 0) {
          list[i].children = child(list[i].bdictCode)
        }
        childs.push(list[i])
      }
    }
    return childs
  }
  return child(parentID)
}
let res = arrayToTree(arr, '0')
console.log(res)

let treeRes = []
function tree2arr (res) {
  res.forEach(item => {
    if (!item.children) {
      treeRes.push(item)
    } else {
      tree2arr(item.children)
    }
  });
}
tree2arr(res)
console.log(treeRes)


// function arrayToTree (list, parentID) {
//   const child = function (pareID) {
//     //先定义一个数组，用于存储所查到的子元素
//     const childs = [];
//     //循环数组
//     for (let i = 0; i < list.length; i++) {
//       //如果数组其中一项的bparentCode等于传入的，说明这一项是传入的子元素，把他push进数组，然后重复递归自己找该项的子元素
//       if (list[i].bparentCode === pareID) {
//         if (child(list[i].bdictCode).length > 0) {
//           list[i].children = child(list[i].bdictCode);
//         }
//         childs.push(list[i]);
//       }
//     }
//     //最后将查到的所有子元素返回
//     return childs;
//   };
//   return child(parentID);
// }
// let res = arrayToTree(arr, '0')
// console.log(res);
