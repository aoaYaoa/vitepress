# API示例

这个页面展示了如何在VitePress中使用Vue的API。

## 使用Vue组合式API

VitePress允许你在Markdown文件中直接使用Vue的组合式API。

### 响应式数据

<script setup>
import { ref, reactive, computed } from 'vue'

// ref
const count = ref(0)

// reactive
const state = reactive({
  name: 'VitePress',
  theme: 'Default'
})

// computed
const doubleCount = computed(() => count.value * 2)
</script>

### 计数器示例

<div class="counter-demo">
  <p>当前计数: {{ count }}</p>
  <p>双倍计数: {{ doubleCount }}</p>
  <button @click="count--">-</button>
  <button @click="count++">+</button>
</div>

```vue
<script setup>
import { ref, computed } from 'vue'

const count = ref(0)
const doubleCount = computed(() => count.value * 2)
</script>

<div class="counter-demo">
  <p>当前计数: {{ count }}</p>
  <p>双倍计数: {{ doubleCount }}</p>
  <button @click="count--">-</button>
  <button @click="count++">+</button>
</div>
```

### 表单绑定示例

<div class="form-demo">
  <p>姓名: {{ state.name }}</p>
  <p>主题: {{ state.theme }}</p>
  <input v-model="state.name" placeholder="输入姓名">
  <select v-model="state.theme">
    <option value="Default">默认主题</option>
    <option value="Dark">暗黑主题</option>
    <option value="Custom">自定义主题</option>
  </select>
</div>

```vue
<script setup>
import { reactive } from 'vue'

const state = reactive({
  name: 'VitePress',
  theme: 'Default'
})
</script>

<div class="form-demo">
  <p>姓名: {{ state.name }}</p>
  <p>主题: {{ state.theme }}</p>
  <input v-model="state.name" placeholder="输入姓名">
  <select v-model="state.theme">
    <option value="Default">默认主题</option>
    <option value="Dark">暗黑主题</option>
    <option value="Custom">自定义主题</option>
  </select>
</div>
```

## 使用自定义组件

除了直接在Markdown中使用Vue API，你还可以注册并使用自定义组件。

### 全局组件

在`.vitepress/theme/index.js`中注册全局组件：

```js
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import MyComponent from './MyComponent.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('MyComponent', MyComponent)
  }
}
```

然后在任何Markdown文件中使用：

```md
<MyComponent />
```

### 本地组件

也可以在Markdown文件中直接导入并使用组件：

```vue
<script setup>
import { MyComponent } from '../components/MyComponent.vue'
</script>

<MyComponent />
```

## 自定义样式

<style>
.counter-demo {
  padding: 15px;
  margin-bottom: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
}

.counter-demo button {
  margin: 0 5px;
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
}

.counter-demo button:hover {
  background-color: #eee;
}

.form-demo {
  padding: 15px;
  margin-bottom: 20px;
  background-color: #f8f8f8;
  border-radius: 8px;
}

.form-demo input,
.form-demo select {
  display: block;
  margin: 10px 0;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
}
</style> 