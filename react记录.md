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
  2. search参数
        路由链接（携带参数）： <Link to={`/home/homemessage/detail?id=${ele.id}&title=${ele.content}`}>{ele.title}</Link>
        注册路由（正常注册即可） ： <Route path='/home/homemessage/detail' component={Detail}/>
        接受参数 ：const {search} = this.props.location
        备注：接受的数据是编码字符串，需要借助querystring解析
  3. state 传递参数
        路由链接（携带参数）： <Link to={{pathname:"/home/homemessage/detail",state:{id:ele.id,title:ele.content}}}>{ele.title}</Link>
        注册路由（正常注册即可） ： <Route path='/home/homemessage/detail' component={Detail}/>
        接受参数 ： const {id,title} = this.props.location.state
        备注：刷新也可保留参数
# 编程式路由导航
   借助this.props.history对象上的API进行操作路由跳转，前进，后退
        this.props.history.push 添加路由
        this.props.history.replace 替换路由
        this.props.history.goBack 后退
        this.props.history.goForward 前进
        this.props.history.go 跳转指定路由
# BrowserRouter 与 HashRouter 的区别
  1. 底层原理不同
     BrouserRouter 使用的是H5的history API，不兼容IE9及以下版本。
  2. url的表现形式不一样
     BrowserRouter 的路径中没有#，例如：location:3000/demo/test
     HashRouter 的路径中包含# 例如：location:3000/#/demo/test
  3. 刷新后对路由参数state的影响
     （1） BrowserRouter没有任何影响，因为state的参数保存在history中
     （2） HashRouter 刷新后会导致路由state参数的丢失
  4. 备注：HashRouter 可以用于解决一些路径错误相关的问题
# antd的按需引入+自定主题
  1. 安装依赖 yarn add react-app-rewired customize-cra babel-plugin-import less less-loader
  2. 修改package.json
        "scripts": {
          "start": "react-app-rewired start",
          "build": "react-app-rewired build",
          "test": "react-app-rewired test",
          "eject": "react-scripts eject"
        },
  3. 根据目录下创建config-overrides.js
      const { override, fixBabelImports, addLessLoader } = require('customize-cra');

      module.exports = override(
          fixBabelImports('import', {
              libraryName: 'antd',
              libraryDirectory: 'es',
              style: true,
          }),
          addLessLoader({
              lessOptions: {
                  javascriptEnabled: true,
                  modifyVars: { '@primary-color': '#1DA57A' },
              }
          }),
      );
  4. 改变主题后应将对应的引入的css删除
# redux求和案例精简版
  1. 去除count组件自身的做法
  2. src 下建立
        -src
          -redux
            -store.js
            -count_reducer.js
  3. store.js
     1) 引入redux中的createStore函数，创建一个store
     2) createStore调用时要传入一个为其服务的reducer
     3) 暴露store对象
  4. count_reducer.js
     1) reducer的本质是一个函数，接收：preStare,action 返回加工后的状态
     2) reducer有两个作用，初始化状态，加工状态
     3) reducer被第一次调用时，是store自动触发的，传递的preStare是undefined
  5. 在index.js 中监测store中状态的改变，一旦发生改变重新渲染<App/>
     备注： redux只负责管理状态，至于状态的改变驱动页面的展示，要靠自己手写 
# 求和案例_redux完整版
      新增俩个文件 
        redux_action.js ： 专门用于创建action对象
        constant.js ： 放置容易写错action中的type 
# 求和案例_redux异步action版
  1. 明确：延迟的动作不想交给组件自身，想交给action
  2. 何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回
  3. 具体编码
       1) redux-thunk 并配置在store中
       2) 创建action的函数不再返回一般对象，而是一个函数，该函数中写异步任务
       3) 异步任务有结果后，分发一个同步的action去操作数据
  4. 备注：异步action不是必须要写的，完全可以自己等待异步任务的结果出现后，再去分发同步action

# 求和案例 react-redux的基本使用
  1. 明确两个概念：
     1) UI组件：不能使用任何redux的api，只会负责页面的呈现，交互等
     2) 容器组件：负责和redux通信，将结果交给UI组件
  2. 如何创建一个容器组件--靠react-redux的connect函数
      export default connect(mapStateToProps, MapDispatchToProps)(CountUI)
      mapStateToProps 映射状态至组件的props，返回值是一个对象
      MapDispatchToProps 映射操作状态的方法，返回值是一个对象
  3. 备注：UI组件的store是靠props传进去的，而不是容器组件中直接引入的。
  4. MapDispatchToProps 也可以传一个对象 
     {
      "increment": createIncrementAction,
      "decrement": createdecrementAction,
      "AsyncAction": createdecrementAsyncAction,
     }
# 求和案例 react-reduct 的使用优化
  1. 容器和UI组件整合成一个文件
  2. 无需自己给容器组件传递store，给<App/>包裹一个 <Provider store={store}></Provider> 即可
  3. 使用了 react-redux 后不用再检测redux中的状态改变，容器组件可以自动完成这个工作
  4. maMapDispatchToPropsp 可以简单的写成一个对象
  5. 一个组件要和 redux “打交道”要经过哪几步
        1) 定义好UI组件---》不暴露
        2) 引入connect生成一个容器组件，并暴露，写法如下
          export default connect(store =>({ store }), 
            {
                "key": value,
            }
          )(CountUI)
        3) 再UI组件中通过 this.props 来获取状态
        4)
# 求和案例 react-redux 数据共享版
  1. 定义一个pesersonzu组件，和Count组件通过redux共享数据
  2. 为person组件编写：reducer 、action ，配置constant常量
  3. 重点：person 和 reducer 和 count 的 Reducer 要使用 combineReducers 进行合并，合并后的总状态是一个对象
  4. 交给store的是总reducer，最后注意再组件中取出状态的时候，记得取到位。
# 开发者工具的使用
  1. npm install redux-devtools-extension -save
  2. store 中进行配置 引入
     import { composeWithDevTools } from "redux-devtools-extension"
     export default  createStore(allReducer,composeWithDevTools(applyMiddleware(thunk))) 
# 求和案例_react-redux最终版
  1. 所有变量名字要规范，尽量触发对象的简写方式
  2. reducers文件夹中，编写index.js专门用于汇总并暴露所有的reducer