![logo](./logo.png)

[![Github release](https://img.shields.io/badge/release-v1.0.1-brightgreen)](https://github.com/4defaa/just-mock/releases)[![License](https://img.shields.io/badge/license-Apache--2.0-orange)](http://www.apache.org/licenses/LICENSE-2.0)

[中文](./README_zh.md)

# What is this

just a beautiful vue3 supported pdf viewer

# Usage

## Install

```
npm install just-pdf-viewer
```

## Import

```typescript
import { createApp } from 'vue'
import JustPdfViewer from 'just-pdf-viewer';
import App from './App.vue';
import 'just-pdf-viewer/es/style.css'

const app = createApp(App);
app.use(JustPdfViewer);
app.mount('#app');
```

## Use in vue

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

| name      | description                           | type                                                         | default value | version |
| --------- | ------------------------------------- | ------------------------------------------------------------ | ------------- |---------|
| width     | Specify viewer's width                | string                                                       | --            | 1.0.1   |
| height    | Specify viewer's height               | string                                                       | --            | 1.0.1   |
| src       | Specify viewer's pdf resource src     | string \| URL \| TypedArray \| ArrayBuffer \| DocumentInitParameters | --            | 1.0.1   |
| rotatable | Specify whether it can rotate         | boolean                                                      | true          | 1.0.1   |
| scalable  | Specify whether it can scale          | boolean                                                      | true          | 1.0.1   |
| lazy-load | Specify whether it renders all or not | boolean                                                      | true          | 1.0.1   |

`DocumentInitParameters`[@see#getDocument](https://github.com/mozilla/pdf.js/blob/master/src/display/api.js) 

# Live Example

https://just.pdf.viewer.sdefaa.com:8849



