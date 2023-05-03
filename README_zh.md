![](./logo.png)

[![Github release](https://img.shields.io/badge/release-v1.0.1-brightgreen)](https://github.com/4defaa/just-mock/releases)[![License](https://img.shields.io/badge/license-Apache--2.0-orange)](http://www.apache.org/licenses/LICENSE-2.0)

[English](./README.md)

# 是什么

一个漂亮的基于vue3的pdf查看组件。

# 使用

## 安装

```
npm install just-pdf-viewer
```

## 导入

```typescript
import { createApp } from 'vue'
import JustPdfViewer from 'just-pdf-viewer';
import App from './App.vue';
import 'just-pdf-viewer/es/style.css'

const app = createApp(App);
app.use(JustPdfViewer);
app.mount('#app');
```

## vue中使用

```vue
<script setup lang="ts">
import {ref} from "vue";
const rotatable = ref<boolean>(true)
const scalable = ref<boolean>(true)
const lazyLoad = ref<boolean>(false)
</script>

<template>
	<just-pdf-viewer src="/test.pdf" width="100vw" height="100vh" :rotatable="rotatable"  :scalable="scalable"  :lazy-load="lazyLoad"/>
</template>

<style scoped>

</style>

```

## API

**\<just-pdf-viewer> Props**

| 属性名    | 描述                    | 类型                                                         | 默认值 | 版本    |
| --------- | ----------------------- | ------------------------------------------------------------ | ------ |-------|
| width     | 指定查看器的宽度        | string                                                       | --     | 1.0.1 |
| height    | 指定查看器的高度        | string                                                       | --     | 1.0.1 |
| src       | 指定查看器的pdf资源来源 | string \| URL \| TypedArray \| ArrayBuffer \| DocumentInitParameters | --     | 1.0.1 |
| rotatable | 指定是否可以旋转        | boolean                                                      | true   | 1.0.1 |
| scalable  | 指定是否可以缩放        | boolean                                                      | true   | 1.0.1 |
| lazy-load | 指定是否全部渲染        | boolean                                                      | true   | 1.0.1 |

`DocumentInitParameters`[@见#getDocument](https://github.com/mozilla/pdf.js/blob/master/src/display/api.js) 

# 在线例子

https://just.pdf.viewer.sdefaa.com:8849







