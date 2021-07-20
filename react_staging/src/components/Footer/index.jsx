import React, { Component } from 'react'

export default class Footer extends Component {

    check = (event)=>{
        this.props.checkAll(event.target.checked)
    }

    clearDone=()=>{
        this.props.clearAllDone()
    }

    render() {
        const { stuList } = this.props
        const doneNum = stuList.reduce((pre, ele) => {
            if (ele.done) { pre += 1 } else { pre += 0 }
            return pre
        }, 0)
        return (
            <div>
                <div className="todo-footer">
                    <label>
                        <input type="checkbox" checked={doneNum === stuList.length && stuList.length!==0 ? true : false} onChange={this.check}/>
                    </label>
                    <span>
                        <span>已完成{doneNum}</span> / 全部{stuList.length}
                    </span>
                    <button onClick={this.clearDone} className="btn btn-danger">清除已完成任务</button>
                </div>
            </div>
        )
    }
}
