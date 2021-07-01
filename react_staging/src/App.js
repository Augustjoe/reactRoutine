import React from "react"

import Hellow from "./components/hellow/Hellow"

// import {Component} from "react"  这不是结构赋值，只是因为react用了多种的暴露方式

const {Component} = React

// 暴露app组件
export default class App extends Component{

  render(){
    return (
      <div>
          <Hellow></Hellow>
      </div>
    )     
  }
}


