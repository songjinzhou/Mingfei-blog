## 删除排序数组中的重复项

::: tip 题目描述
给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
[leetcode 26题](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/)
:::

题目可知条件，输入的是一个排序数组，由小到大

1. 使用栈的方式去重，获取新的数组
2. 将新的短数组拼接到开头

```javascript
var removeDuplicates = function(nums) {
   // 边界条件
  if (nums.length === 0) return 0
  const stack = [nums[0]]
  nums.map(item => {
    // 遇到不同的值入站
    const top = stack[stack.length -1]
    if (item > top) {
      stack.push(item)
    }
  })
  // 拼接新的数组
  nums.splice(0, stack.length -1, ...stack)
  return stack.length
};
```

阅读优秀题解，还可以使用快慢指针来处理这类问题

```javascript
  var removeDuplicates = function(nums) {
// 设置快慢指针
  let fast = 1;
  let slow = 0;
// 快指针每次走一步，慢指针到不同值走一步
  while (fast < nums.length) {
    if (nums[fast] > nums[slow]) {
      slow++
      nums[slow] = nums[fast]
    }
    fast++
  }
  return slow + 1
};
```


## 买卖股票的最佳时机 II

::: tip 题目描述
给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
[leetcode 122题](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)
:::

贪心算法不是对所有问题都能得到整体最优解，关键是贪心策略的选择。也就是说，不从整体最优上加以考虑，做出的只是在某种意义上的局部最优解.

全部数据都是已经知道的，所以我们可以站在上帝视角，来作弊，我们买入之后，卖出
如果上涨，反悔昨天的生意继续卖出，
如果跌了，不好意思，买定离手

```javascript
var maxProfit = function(prices) {
  let prefit = 0
  for (let i = 1; i < prices.length; i++) {
    // 涨
    if(prices[i] > prices[i-1]) {
      prefit += prices[i] - prices[i-1]
    }
  }
  return prefit
};
```

## 旋转数组
::: tip 题目描述
给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

[leetcode 189题](https://leetcode-cn.com/problems/rotate-array/comments/)
:::

观察法，剪切出最后面的k个元素，拼接到前面

```javascript
var rotate = function(nums, k) {
  if (nums.length <= 1) return nums
  // 不满一次循环的移动次数
  k = k % (nums.length)
  const temp = nums.splice(nums.length - k, nums.length -1)
  nums.splice(0, 0,...temp)
  return nums
};
```

这个要熟悉下数组方法 **splice**

- 第一个参数是，删除开始的位置
- 第二个参数是要删除的元素个数
- 后面的参数是要插入的元素


## 只出现一次的数字
::: tip 题目描述
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

[leetcode 136题](https://leetcode-cn.com/problems/single-number/)
:::

 **审题**
某个元素只出现 1 次，其余元素都出现 2 次

**时间复杂度O(n)，空间复杂度O(1)**
只操作 nums 数组本身，不使用额外空间

**n ^ n === 0 且 n ^ 0 === n**
并且，异或遵循**交换律**
[4,1,2,1,2] 将数字全部异或运算一遍：
4 ^ 1 ^ 2 ^ 1 ^ 2 => 1 ^ 1 ^ 2 ^ 2 ^ 4 => 0 ^ 2 ^ 2 ^ 4 => 2 ^ 2 ^ 4 => 0 ^ 4 => 4
出现 2 次的数字在异或中都抵消了，最后得出只出现 1 次的数

```javascript
var singleNumber = function(nums) {
  let res = nums[0]
  for (let i = 1; i < nums.length; i++) {
    res ^= nums[i]
  }
  return res
};
```

## 两个数组的交集 II
::: tip 题目描述
给定两个数组，编写一个函数来计算它们的交集。

[leetcode 350题](https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/)
:::

1. 暴力法
  - 遍历第一个数组
  - 如果indexOf查找到，push到结果数组，删除第二个数组的值

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const result = [];
  for (let i = 0; i < nums1.length; i++) {
    const index = nums2.indexOf(nums1[i]);
    if (index > -1) {
      result.push(nums1[i])
      nums2.splice(index, 1)
    }
  }
  return result
};
```
2. 排序优化，双指针
```javascript
var intersect = function(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  const result = []
  let i = 0,
      j = 0

  while(i < nums1.length && j < nums2.length) {
    if (nums1[i] > nums2[j]) {
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      result.push(nums1[i])
      i++;
      j++;
    }
  }
  return result
};
```


## 加一
::: tip 题目描述
给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

[leetcode 66题](https://leetcode-cn.com/problems/plus-one/)
:::
*开始想先转成字符串，再转成数字加一再转成数字，但是会造成溢出*

**加法运算**逢十进一

```javascript
var plusOne = function(digits) {
  // 模拟加法，从各位开始加一，十进制 
  for (let i = digits.length - 1; i >= 0; i-- ) {
    digits[i] = (digits[i] + 1) % 10;
    if (digits[i] > 0) {
      return digits
    }
    if (i === 0 && digits[i] === 0) digits.unshift(1)
  }
  return digits
}
```


