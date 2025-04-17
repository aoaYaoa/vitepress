# Markdown示例

VitePress提供了丰富的Markdown扩展功能，以下是一些常用示例。

## 基本Markdown语法

### 标题

```md
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

### 强调

```md
*斜体* 或 _斜体_
**粗体** 或 __粗体__
***粗斜体*** 或 ___粗斜体___
```

### 列表

#### 无序列表

```md
- 项目1
- 项目2
  - 子项目2.1
  - 子项目2.2
```

- 项目1
- 项目2
  - 子项目2.1
  - 子项目2.2

#### 有序列表

```md
1. 项目1
2. 项目2
   1. 子项目2.1
   2. 子项目2.2
```

1. 项目1
2. 项目2
   1. 子项目2.1
   2. 子项目2.2

### 链接

```md
[VitePress](https://vitepress.dev)
```

[VitePress](https://vitepress.dev)

### 图片

```md
![VitePress Logo](/vitepress-logo-mini.svg)
```

## VitePress扩展功能

### 代码块

#### 基本代码块

```js
console.log('Hello, VitePress!')
```

#### 行高亮

```js{3}
function hello() {
  // 这行不会高亮
  console.log('这行会高亮')
  // 这行不会高亮
}
```

#### 多行高亮

```js{1,4-6}
// 这行会高亮
import { ref } from 'vue'

// 这些行会高亮
const count = ref(0)
console.log(count.value)
```

#### 行号

```js:line-numbers
// 第1行
function hello() {
  // 第3行
  console.log('Hello, VitePress!')
  // 第5行
}
```

#### 从特定行开始

```js:line-numbers=10
// 第10行
function hello() {
  // 第12行
  console.log('Hello, VitePress!')
  // 第14行
}
```

#### 显示语言

```js
// 代码块的右上角会显示"js"
console.log('Hello, VitePress!')
```

#### 导入代码

```js
// 可以导入文件，但此处仅作示例
// <<< @/examples/code-example.js
```

### 代码组

::: code-group

```js [JavaScript]
console.log('Hello, VitePress!')
```

```ts [TypeScript]
const greeting: string = 'Hello, VitePress!'
console.log(greeting)
```

```vue [Vue]
<script setup>
import { ref } from 'vue'

const greeting = ref('Hello, VitePress!')
</script>

<template>
  <div>{{ greeting }}</div>
</template>
```

:::

### 自定义容器

#### 提示容器

::: tip 提示
这是一个提示容器
:::

::: warning 警告
这是一个警告容器
:::

::: danger 危险
这是一个危险容器
:::

::: info 信息
这是一个信息容器
:::

::: details 点击查看更多
这是一个详情容器，可以点击展开/收起
:::

### 表格

| 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| color | string | #646cff | 主题色 |
| width | number | 100 | 宽度 |
| height | number | 100 | 高度 |

### Emoji

VitePress支持Emoji表情符号：

:smile: :heart: :thumbsup: :cake:

```
:smile: :heart: :thumbsup: :cake:
```

### 目录

```md
[[toc]]
```

[[toc]]

### 自定义ID

```md
### 自定义ID {#custom-id}
```

点击这个链接跳转到[自定义ID](#custom-id)

### 行内代码

在Markdown中使用`行内代码`非常简单。

```md
在Markdown中使用`行内代码`非常简单。
```

## 在Markdown中使用Vue

### 模板语法

一个计数器示例：

<div>
  <button @click="count--">-</button>
  <span>{{ count }}</span>
  <button @click="count++">+</button>
</div>

### 使用组件

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script> 