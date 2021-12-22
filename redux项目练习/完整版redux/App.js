import React, { Component } from 'react'
// 引入的都是容器组件
import Count  from './components/count'
import Person from "./components/person"


export default class App extends Component {
    render() {
        return (
            <div>
               <Count/>
               <Person/>
            </div>
        )
    }
}
