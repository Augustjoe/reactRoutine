import React, { Component } from 'react'
import {nanoid} from "nanoid"
export default class Header extends Component {

    // 安下回车的回调函数
    handleKeyUp= (event)=>{
        const {keyCode,target} = event;
        if(keyCode !== 13) return 
        if(target.value.trim()){
            alert("输入值不能为空")
            return
        }
        console.log(target.value)
        const obj = {id:nanoid(),name:target.value,done:false}
        this.props.addList(obj)
        target.value = ""
    }

    render() {
        return (
            <div>
                <div className="todo-header">
                    <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
                </div>
            </div>
        )
    }
}
