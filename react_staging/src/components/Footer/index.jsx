import React, { Component } from 'react'

export default class Footer extends Component {
    
    
    render() {
        const doneCount = this.props.stuList.reduce((pre,item)=>{return pre + (item.done ? 1 : 0)},0)
        return (
            <div>
                <div className="todo-footer">
                    <label>
                        <input type="checkbox" checked={this.props.stuList.length == doneCount}/>
                    </label>
                    <span>
                        <span>已完成{doneCount}</span> / 全部{this.props.stuList.length}
                    </span>
                    <button className="btn btn-danger">清除已完成任务</button>
                </div>
            </div>
        )
    }
}
