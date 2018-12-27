# 文档格式

本节将介绍如何在项目中使用 md编写项目文档。

-----------

## 建立项目根目录下的 README.md 文件


示例1 文档部分的样式

- 在文档最上层写style标签即可
```html
<style>
  .demo-box{
    .znl-button{
      margin-right: 10px;
    }
    .znl-row{
      padding: 10px 0;
    }
  }
</style>
```

示例2 文档部分的script

- 在文档最上层写script标签即可
``` javascript
<script>
  <script>
  export default {
      data() {
          return {
              a: 1
          }
      }
  }
</script>
```

示例2 文档部分的demo(实际效果和demo代码)

- 将template代码写在 ::: ```html  ``` :::中
参考 现有的md文件
