import React, { Component } from 'react'

export default class Person extends Component {
    addPerson = ()=>{

    }
    
    render() {
        return (
            <div>
                <h2> 我是Person 组件 </h2>
                <input ref={c=>this.nameNode = c} type="text" placeholder="请输入名字"/>
                <input ref={c=>this.nameNode = c} type="text" placeholder="请输入年龄"/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    <li></li>
                </ul>
            </div>
        )
    }
}
