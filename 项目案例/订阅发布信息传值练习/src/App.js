import React from "react"
import "./app.css"
import Search from "./components/search/search"
import List from "./components/List/List"
const { Component } = React

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <Search ></Search>
        <List ></List>
      </div>
    )
  }
}


