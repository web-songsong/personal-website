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

冒泡排序（Bubble Sort），是一种计算机科学领域的较简单的排序算法。

它重复地走访过要排序的元素列，依次比较两个相邻的元素，如果他们的顺序（如从大到小、首字母从A到Z）错误就把他们交换过来。走访元素的工作是重复地进行直到没有相邻元素需要交换，也就是说该元素已经排序完成。

:::

<hideShow>
<template slot="example">

`<无>`

</template>
<template slot="answer">

```javascript
/**
 * 冒泡排序
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      [arr[j], arr[j + 1]] =
        arr[j] > arr[j + 1] 
          ? [arr[j + 1], arr[j]] : [arr[j], arr[j + 1]]
    }
  }
  return arr
}
```

</template>
</hideShow>

### 选择排序

::: tip 选择排序

选择排序（Selection sort）是一种简单直观的排序算法。它的工作原理是每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，直到全部待排序的数据元素排完。 选择排序是不稳定的排序方法。

:::

<hideShow>
<template slot="example">

`<无>`

</template>
<template slot="answer">

```javascript
/**
 * 选择排序
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      [arr[i], arr[j]] = arr[i] > arr[j] ? [arr[j], arr[i]] : [arr[i], arr[j]]
    }
  }
  return arr
}
```

</template>
</hideShow>

### 插入排序

::: tip 插入排序

插入排序的基本思想是：每步将一个待排序的记录，按其关键码值的大小插入前面已经排序的文件中适当位置上，直到全部插入完为止。

:::

<hideShow>
<template slot="example">

`<无>`

</template>
<template slot="answer">

```javascript
/**
 * 插入排序
 */
function insertSort(arr) {
  let tem,j
  for(let i = 0; i<arr.length; i++){
    j = i
    tem = arr[i]
    while(j>0&& arr[j-1]>tem){
      arr[j] = arr[j -1]
      j--
    }
    arr[j] = tem
  }
  return arr
}
```

</template>
</hideShow>

### 二分查找

::: tip 利用js实现二分查找

二分查找也称折半查找（Binary Search），它是一种效率较高的查找方法。但是，折半查找要求线性表必须采用顺序存储结构，而且表中元素按关键字有序排列。

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

