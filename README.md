## react-typescript 项目的脚手架工具
##### 集成了react-typescript项目使用的所有基本配置以及最合适的插件：
```
antd/antd-mobile UI框架
axios HTTP库
immutability-helper 更好的操作不可变数据的插件，例如redux修改state，修改深层嵌套的数据时
reselect redux的中间件，缓存redux的数据，减少计算和渲染压力
```
### 1. 全局下载脚手架工具
```
// 全局安装脚手架工具
npm i hrts-cli -g
```
### 2. 初始化项目
```
hrts-cli init [项目名称]
```