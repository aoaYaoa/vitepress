# 图片使用指南

本文档演示如何在VitePress中使用图片。

## 图片存放位置

在VitePress中，有两种主要的图片存放方式：

### 1. public 目录（静态资源）

将图片放在 `public/images` 目录下，这些图片将按原样复制到最终构建的站点中，不会被处理或优化。

使用方法：

```md
![图片描述](/images/example.png)
```

这种方式适合不需要处理的图片，如图标、LOGO等。

### 2. 相对路径引用

也可以将图片放在与Markdown文件相同或相对的目录下，然后使用相对路径引用：

```md
![图片描述](./images/example.png)
```

这种方式下的图片会被Vite处理和优化。

## 图片尺寸和对齐方式

默认情况下，图片会以其原始尺寸显示，但你可以使用HTML标签指定尺寸：

```html
<img src="/images/example.png" alt="图片描述" width="300" />
```

居中显示图片：

```html
<div style="text-align: center">
  <img src="/images/example.png" alt="图片描述" width="300" />
</div>
```

## 图片懒加载

VitePress默认支持图片懒加载，不需要额外配置。

## 图片标题

你可以为图片添加标题：

```md
![图片描述](/images/example.png)
*图片标题*
```

## 使用Vue组件显示图片

如果需要更高级的图片显示功能，可以创建自定义Vue组件：

```vue
<script setup>
// ImageComponent.vue
defineProps({
  src: String,
  alt: String,
  width: String
})
</script>

<template>
  <div class="image-container">
    <img :src="src" :alt="alt" :width="width" />
    <div class="caption" v-if="$slots.default">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.image-container {
  text-align: center;
  margin: 20px 0;
}
.caption {
  font-size: 0.9em;
  color: #666;
  margin-top: 8px;
}
</style>
```

使用方法：

```vue
<ImageComponent src="/images/example.png" alt="图片描述" width="300">
  这是图片标题
</ImageComponent>
```

## 图片优化建议

1. 使用适当的图片格式：
   - JPEG：适合照片和渐变图像
   - PNG：适合需要透明度的图像
   - SVG：适合图标和简单图形
   - WebP：现代浏览器支持的高效格式

2. 压缩图片以减小文件大小

3. 指定合适的图片尺寸，避免浏览器缩放

4. 为所有图片添加alt文本，提高可访问性

## 示例

当你添加图片到 public/images 目录后，可以使用以下方式引用它们：

```md
![Logo](/images/logo.png)
``` 