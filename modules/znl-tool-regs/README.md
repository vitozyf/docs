

# znl-tool-regs

> 常用正则表达式

-------------

## 下载

```shell

npm install znl-tool-regs --save

```

## 引入

```javascript

import REG from 'znl-tool-regs';

```

## 例子

基本用法

:::demo
```html
<znl-input :border="true"></znl-input>
<script>
methods: {
    handler() {
        REG.Email.test('vito.qq.com')
    }
}
</script>

```
:::

## API
```javascript
const Email = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const Domain = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/.?/;
const InternetURL = /^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$/;
const PhoneNo = /^(13[0-9]|14[0-9]|15[0-9]|166|17[0-9]|18[0-9]|19[8|9])\d{8}$/;
const Phone = /^(\(\d{3,4}-)|\d{3.4}-)?\d{7,8}$/ // ("XXX-XXXXXXX"、"XXXX-XXXXXXXX"、"XXX-XXXXXXX"、"XXX-XXXXXXXX"、"XXXXXXX"和"XXXXXXXX)：
const IdCard = /^((\d{18})|([0-9x]{18})|([0-9X]{18}))$/
const IP = /\d+\.\d+\.\d+\.\d+/

```
