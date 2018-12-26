# Stock

> 库存业务组件。

-------------

## 引入

```javascript
import Stock from 'znl-stock';

Vue.component(Stock.name, Stock);
```

## 例子

库存模块

```html
<znl-stock></znl-stock>
```


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
