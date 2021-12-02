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
# react脚手架文件介绍
   public - favicon.ico 网页页签图标
          - index.html 最终渲染的网页 所有的页面最终都会渲染到index.html上
          - logo 网页的logo
          - manifest.json react的网页套壳配置，是为在APP上允许而准备的
          - robots.txt 
   src - App.css app的样式
       - App.js  app的js方法
       - index.css 公用的样式
       - index.js react的入口文件，将react渲染到html
       - reportWebVitals.js 用于测试网页性能
       - setupTest 用于整体或组件测试
       执行顺序 index.js -> index.html (不要随便改文件名)
# todoList 案例相关知识点
  1. 拆分组件、实现静态组件。注意在react中 className、style的写法
  2. 动态实现初始化列表。如何决定数据放在哪个组件里？
     * 某个组件使用放在组件中
     * 多个组件使用，放在在他们共同的父组件中（状态提升）
  3. 关于父子组件之间的通信：
     1. 父组件 给 子组件传递数据：通过props传递
     2. 子组件 给 父组件传递数据：通过props传递，要求父组件提前给子组件传递一个函数
  4. 注意defaultChecked 和 checked 的区别，类似的还有：defaultValue 和 value
  5. 状态在哪里，操作状态的方法就在哪里
# github搜索案例相关知识点
  1. 设计状态时要考虑全面，如带有网络请求的组件，要考虑清楚请求失败怎么办
  2. ES6知识点 
        解构赋值   const {a:{b:{c}}}  = obj
                  const {a:{b:{c:data}}}  = obj
  3. 消息订阅与发布机制（实现任意组件间通信）
     1. 先订阅，再发布
     2. 使用任意组件通信
     3. 要在组件的componentWillUnmount中取消订阅
  4. fetch发送请求（关注分离的设计思想）具体请参考示例
     1. 注意fetch是传递的promise实例
     2. 现阶段很多浏览器的支持并不好
# React路由 
    一个路由就是一个映射关系（key-value）key为路径，value可能是function或者component
    1. 明确好界面中的导航区、展示区
    2. 导航区的a标签改为Link标签
      <Link className="list-group-item" to="/home">Home</Link>
    3. 展示区写Router标签进行路径的匹配
       <Route path="/home" component={Home}></Route>
    4. <App>的最外侧包夹了一个 <BrowserRouter> 或者 <HashRouter>
# 路由组件和一般组件的区别
    1. 写法不同
       一般组件 ： <Demo/>
       路由组件 ： <Route path="/home" component={Home}></Route>
    2. 存放位置不同：
       一般组件 components
       路由组件 pages
    3. 接收到的props不同
       一般组件：标签上传递了什么就收到什么
       路由组件：
                history:
                      go: ƒ go(n)
                      goBack: ƒ goBack()
                      goForward: ƒ goForward()
                      push: ƒ push(path, state)
                      replace: ƒ replace(path, state)
                location:
                      pathname: "/home"
                      search: ""
                      state: undefined
                match:
                      params: {}
                      path: "/home"
                      url: "/home"
# NavLink与封装NavLink
  1. NavLink可以通过实现路由链的高亮，通过activeClassName指定样式名
  2. 标签体内容是一个特殊的标签属性
  3. 通过this.props.children可以获取标签体内容

# 解决多级路径刷新页面样式丢失问题
  1. public/index.html 中引入样式时不写./ 写 / （常用）
  2. public/index.html 中引入样式时不写 ./ 写 %PUBLIC_URL%
  3. 使用HashRouter
# 路由的严格匹配与模糊匹配
  1. 默认使用的是模糊匹配（输入的路径必须包含匹配的路径，且顺序一致）
  2. 开启严格匹配: <Route exact={true} path="/home" component={Home}></Route>
  3. 严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由
# Redirect的使用
  1. 一般卸载所有路由注册的最下方，当所有的路由都无法匹配时，跳转Redirect指定的路由
  2. 具体编码                 
                <Switch>
                  <Route path="/about" component={About}></Route>
                  <Route path="/home" component={Home}></Route>
                  {/* 当所有的路由都没有匹配上时，会走Redirect */}
                  <Redirect to="/about/"></Redirect>
                </Switch>

# 嵌套路由
  1. 注册子路由时要写上父路由的path值
  2. 路由的匹配是按照注册路由的顺序进行的

# 向路由组件传递参数
  1. params 传递参数
        路由参数 <Link to={`/home/homemessage/detail/${ele.id}/${ele.title}`}>{ele.title}</Link>
        注册路由 <Route path='/home/homemessage/detail/:id/:title' component={Detail}/>
        接收参数 const { id, title } = this.props.match.params