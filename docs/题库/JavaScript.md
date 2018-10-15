# 有趣的编程题

## 闭包

### 汉诺塔问题

::: tip 汉诺塔
三个柱子 A,B,C，A 上有 n 个圆环，圆环从上到下依次变大（类似金字塔）每次只能移动一个圆环，并且大的圆环不能放在小的圆环上面。将 n 个圆环从 A 移动到全部移动到 C 给出方案。利用代码实现根据 n 来输出相应结果。
:::

<hideShow>
<template slot="example">

n = 1

    A -----> C

n = 2

    A -----> B
    A -----> C
    B -----> C

</template>
<template slot="answer">

```javascript
function move(n, a, b, c) {
  if (n === 1) {
    return console.log(a, ' ----->', c)
  }
  move(n - 1, a, c, b)
  move(1, a, b, c)
  move(n - 1, b, a, c)
}
move(3, 'A', 'B', 'C')
```

</template>
</hideShow>

### 杨辉三角
::: tip 输出杨辉三角

输出杨辉三角：输入 n，输出 n 行。

:::


<hideShow>
<template slot="example">

n = 1

    1

n = 3

    1
    1, 1
    1, 2, 1

</template>
<template slot="answer">

```javascript
function triangle(n) {
  let list = [1]
  let num = 0
  while (num < n) {
    console.log(list)
    const arr = []
    num++

    list.push(0)
    list.reduce((a, b, key) => {
      arr[key] = a + b
      return b
    }, 0)
    list = arr
  }
}
triangle(15)
```

</template>
</hideShow>

## 经典题目

### 字符串中每个字符出现次数

::: tip 统计每个字符出现次数

给定一个字符串，统计出字符串中每个字符出现的次数

:::
<hideShow>
<template slot="example">

str = '1122qqqe'

    1: 2,
    2: 2,
    q: 3,
    e: 1

</template>
<template slot="answer">

```javascript
let str = '1234qwer*)('
const obj = Array.prototype.reduce.call(str, (a, b) => {
  a[b] ? a[b]++ : a[b] = 1
  return a
}, {})
console.log(obj)
```

</template>
</hideShow>

## 算法

### 冒泡排序

::: tip 冒泡排序

1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个
2. 对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。
3. 针对所有的元素重复以上的步骤，除了最后一个。
4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。 

:::

<hideShow>
<template slot="example">

`<无>`

</template>
<template slot="answer">

```javascript
function bubbleSort(arr) {
  arr = this || arr
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      [arr[j], arr[j + 1]] =
        arr[j] > arr[j + 1] 
          ? [arr[j + 1], arr[j]] : [arr[j], arr[j + 1]]
    }
  }
  return arr
}
Array.prototype.bubbleSort = bubbleSort
```

</template>
</hideShow>

### 二分查找

::: tip 利用js实现二分查找

*二分查找*又称折半查找,它是一种效率较高的查找方法

:::

<hideShow>
<template slot="example">

`<无>`

</template>
<template slot="answer">

```javascript
function findArr(arr, val) {
  let low = 0
  let high = arr.length - 1
  while (low <= high) {
    let index = parseInt((low + high) / 2)
    let guess = arr[index]
    if (guess == val) return index
    if (guess > val) high = parseInt(index - 1)
    else low = index + 1
  }
  return -1
}
```

</template>
</hideShow>

