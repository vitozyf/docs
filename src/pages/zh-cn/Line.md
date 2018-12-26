<script>
  export default {
      data() {
          return {
              test: 'aaa'
          }
      }
  }
</script>

# Line

> 通用分割线样式。

-------------

## 下载

```shell

npm install znl-line --save

```

## 引入

```javascript

import 'znl-css-line';

```

## 例子

基本用法

:::demo 需要设置`visible`属性，它接收`Boolean`，当为`true`时显示。
```html

<div>
    <znl-button>{{test}}</znl-button>
</div>

<script>
  export default {
      data() {
          return {
              test: 'aaa'
          }
      }
  }
</script>

```
:::

## API
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|-------|---------|-------|--------|
| fixed | 固定在页面顶部 | Boolean | | false |
| title | 标题 | String | |  |

## Slot
| name | 描述 |
|------|--------|
| left | 左边显示元素 |
| right | 右边显示元素 |
