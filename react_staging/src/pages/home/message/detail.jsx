import React, { Component } from 'react'

export default class detail extends Component {
    state = {
        detail: [
            { id: "1", content: "你好" },
            { id: "3", content: "再见" },
            { id: "2", content: "幸会" },
        ]
    }
    render() {
        // 组件接受params参数
        // const { id, title } = this.props.match.params
        
        // 组件接受
        const { id, title } = this.props.match.search
        const content = this.state.detail.find(ele => ele.id === id)
        return (
            <div>
                <ul>
                    <li>id:{id}</li>
                    <li>title:{title}</li>
                    <li>detail:{content.content}</li>
                </ul>
            </div>
        )
    }
}
