import React, { Component } from 'react'

export default class index extends Component {

    componentDidMount(){
        // 两秒后自动跳转 
        setTimeout(()=>{
            this.props.history.push(`/home/homemessage`)
        },2000)

    }

    render() {
        return (
            <div>
                <h3>我是About的内容</h3>
            </div>
        )
    }
}
