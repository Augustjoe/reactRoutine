import React from "react"
// 没有全部暴露 按需引入
import { Route, Switch, Redirect } from "react-router-dom"

import NavLinks from "./NavLinks/NavLinks"

const { Component, lazy, Suspense } = React

const About = lazy(() => import("./about/index"))
const Home = lazy(() => import("./home/home"))

export default class App extends Component {



  render() {
    return (
      <div className="container">
        <div>
          <div className="row">
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">

                <NavLinks to="/about">About</NavLinks>
                <NavLinks to="/home" children={'Home'}></NavLinks>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  <Switch>
                    <Suspense fallback={<h1>loading....</h1>}>
                      <Route path="/about" component={About}></Route>
                      <Route path="/home" component={Home}></Route>
                      {/* 当所有的路由都没有匹配上时，会走Redirect */}
                    </Suspense>
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


