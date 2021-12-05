import React, { Component } from 'react'
// import qs from "querystring"


export default class detail extends Component {
    state = {
        detail: [
            { id: "1", content: "你好" },
            { id: "3", content: "再见" },
            { id: "2", content: "幸会" },
        ]
    }
    render() {
        console.log(this.props)

        // 组件接受params参数
        // const { id, title } = this.props.match.params
        
        // 接受search参数
        // const {search} = this.props.location
        // const {id,title} = qs.parse(search.slice(1))

        // 接收state参数
        const {id,title} = this.props.location.state

        // 组件接受
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
