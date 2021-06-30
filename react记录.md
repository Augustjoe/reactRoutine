# React是什么？
  是一个将数据渲染为HTML视图的开源JavaScript库。
  由Facebook开发，并且于2013年5月开源
  使用了虚拟DOM+Diffing算法，尽量减少与真实DOM的交互
# react 注意
  所写的不是js而是jsx，要在写js时加上“text/babel”
# React.createElement
  用于创建虚拟DOM，React.createElement(标签名，标签属性，标签内容)
# 虚拟DOM
  虚拟DOM本质上就是一个对象（一般对象）
  虚拟DOM相较真实DOM，比真实DOM缺少很多属性，因其在React中无需那么多属性
  虚拟DOM会在最后被渲染成真实DOM
# JSX 语法规则
  1. 定义虚拟DOM时，不要写引号
  2. 标签中混入JS表达式时要使用{}。
    * 一定要区分js表达式和js代码 
      1. 表达式：一个表达式一定会产生一个值，可以放在任何一个需要值得地方
      
  3. 样式的类名指定不要用class，要用className（为了避开ES6中的class）
  4. 内联样式，要用style={{key:value}}的形式去写
  5. 虚拟DOM 必须只有一个根标签
  6. 标签必须闭合
  7. 若标签首字母为小写，则标签转为html同名元素，若标签为大写，则去找同名的组件
# 组件的使用
  组件分为函数式组件和类式组件，见组件练习
# 生命周期函数
  1. 组件创建的过程
     componentWillMount 组件将要挂载 -> render 挂载组件 -> componentDidMount 组件挂载完成
  2. 组件更新的过程
      shouldComponentUpdate 确认组件是否可以更新 -> componentWillUpdate 组件将要被更新 -> render 更新组件 -> componentDidUpdate组件更新完毕
  3. 更新props后数据更新的回调
      componentWillReceiveProps 更新props  -> shouldComponentUpdate 确认组件是否可以更新 -> componentWillUpdate 组件将要被更新 -> render 更新组件 -> componentDidUpdate组件更新完毕
  3. 在新版（17+）的react中
     1. componentWillUpdate componentWillMount componentWillReceiveProps 在前面加上UNSAFE_  这些函数可能在18版本删除
     2. getDerivedStateFromProps 新版生命周期函数 除销毁组件时，其他任何环境都会触发,可接受到props 和 state 的值，并对其进行处理,必须要有返回值，返回值直接作用到state上,无需处理state时可返回null
     3. getSnapshotBeforeUpdate 在最近一次渲染输出前调用 可在组件马上更新之前获取一些信息，返回值将作为参数传递给componrntDidUpdate()
# react脚手架准备
  1. npm i -g create-react-app 全局安装react脚手架
  2. 创建react项目 create-react-app " 项目名称 "（不许有中文，不能有大写字母）
    * 创建成功后会有四个命令 值得注意的是 yarn eject 会将所有隐藏的wabpack文件显示出来，并且没有办法再重新隐藏
  3. 之后只会有一个html文件 称为单页面应用 spa