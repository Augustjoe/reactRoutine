import React from "react"

import Hearder from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"

// import {Component} from "react"  这不是结构赋值，只是因为react用了多种的暴露方式

const {Component} = React

// 暴露app组件
export default class App extends Component{
 state = {
   stuList : [
    {id:1,name:"吃饭", done:true},
    {id:2,name:"睡觉", done:false},
    {id:3,name:"工作", done:true}
   ]
 }
// 子组件向父组件传值，可以通过回调函数的方式
// 声明一个函数再通过prop 向子组件传递
 addList = (newList)=>{
   const List = [
     newList,...this.state.stuList
   ]
   this.setState({stuList : List})
 }

  render(){
    const { stuList } = this.state
    return (
      <div className="todo-container">
      <div className="todo-wrap">
        <Hearder addList={this.addList}></Hearder>
        <List stuList={stuList}></List>
        <Footer stuList={stuList}></Footer>
      </div>
    </div>
    )     
  }
}


