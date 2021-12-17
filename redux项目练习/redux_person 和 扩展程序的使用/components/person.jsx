import React, { Component } from 'react'
import { createAddPersonAction } from "../redux/actions/person"
import { connect } from "react-redux"



class Person extends Component {
    addPerson = ()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value
        this.props.add({name,age})

    }
    
    render() {
        console.log(this.props)
        return (
            
            <div>
                <h2> 我是Person 组件 ,上方组件的求和为{this.props.count}</h2>
                <input ref={c=>this.nameNode = c} type="text" placeholder="请输入名字"/>
                <input ref={c=>this.ageNode = c} type="text" placeholder="请输入年龄"/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {this.props.persons.map((item,index)=>{
                        return (
                        <li key={index+item.name}>姓名：{item.name}，年龄：{item.age}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default connect((store)=>({persons:store.persons,count:store.count}),{
    add:createAddPersonAction
})(Person)