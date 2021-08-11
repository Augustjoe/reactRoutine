import React from "react"
import "./app.css"
import Search from "./components/search/search"
import List from "./components/List/List"
const { Component } = React

export default class App extends Component {

  state = {
    users: [],
    loading:false,
    isFirst:true,
    err:""
  }
 // 当要改变值过多时，可直接写一个改变值的方法 
  changeState = (users) => {
    this.setState(users)
  }

  render() {
    return (
      <div className="container">
        <Search changeState={this.changeState}></Search>
        {/* 当需要传递的值过多时，可直接写下面这种简写方法 */}
        <List {...this.state}></List>
      </div>
    )
  }
}


