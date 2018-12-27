# 正能量组件库 使用文档

本文将介绍 正能量私有组件库 基本的用法。

---------

version 版本
name: name
keywords

## 准备工作

### 下载nrm管理npm源

```
npm install nrm -g

```

### 修改npm源的地址
- down:  `http://192.168.1.10:8081/repository/npm-group/`
- up:  `http://192.168.1.10:8081/repository/npm-hosted/`

### 添加npm源

```
nrm add name url
```
### 删除npm源

```
nrm del name
```

### 查看npm源

```
nrm ls
```
### 修改npm源

```
nrm use name
```


请注意：
```
上传使用up地址
下载使用down地址
一般情况下，只需要切换到下载地址即可，只有开发组件完成的时候需要上传进仓库再切换到上传源
```


## 上传组件

上传组件时请切换源至本地上传地址， 切换到项目目录执行：

```
npm login
输入 username
输入 password
输入 邮箱

npm publish
```
