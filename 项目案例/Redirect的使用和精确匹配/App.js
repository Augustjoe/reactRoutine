import React from "react"
import "./app.css"
// 没有全部暴露 按需引入
import { Route,Switch,Redirect } from "react-router-dom"

import Hearder from "./components/hearder/hearder"
import NavLinks from "./components/NavLinks/NavLinks"

import About from "./pages/about/index"
import Home from "./pages/home/home"

const { Component } = React

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <div>
          <div className="row">
          <Hearder></Hearder>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">

                {/* 传统切换路由的方式是通过a标签跳转 */}
                {/* <a className="list-group-item active" href="./about.html">About</a>
                <a className="list-group-item" href="./home.html">Home</a> */}

                {/* 在React中靠路由链接实现切换组件操作 */}
                {/* <Link className="list-group-item" to="/about">About</Link>
                <Link className="list-group-item" to="/home">Home</Link> */}

                {/* 也可以使用NavLink NavLink 会在点击时将所在A标签加上 active 样式名，添加的样式名可通过activeClassName自定义 */}
                {/* <NavLink activeClassName="active" className="list-group-item" to="/about">About</NavLink>
                <NavLink className="list-group-item" to="/home">Home</NavLink> */}

                {/* 可将 NavLink 封装成组件来使用 ，在传值时标签中的值会在组件中的 prop.children 里，可直接通过 children={'Home'} 传值 */}
                
                {/* switch 可将一个路由只匹配一个页面 否则 一个路由可匹配多个页面 */}
                
                  <NavLinks to="/about">About</NavLinks>
                  <NavLinks to="/home" children={'Home'}></NavLinks>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                <Switch>
                  <Route path="/about" component={About}></Route>
                  <Route exact={true} path="/home" component={Home}></Route>
                  {/* 当所有的路由都没有匹配上时，会走Redirect */}
                  <Redirect to="/about/"></Redirect>
                </Switch>

                </div>
              </div>
            </div>
          </div>
      </div>
      </div >
    )
  }
}


