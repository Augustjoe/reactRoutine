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