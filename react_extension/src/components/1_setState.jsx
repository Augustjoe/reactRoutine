import React, { Component } from 'react'

export default class Demo extends Component {
    state= {
        count :0
    }

    add = ()=>{
        // const { count } = this.state
        // setState 还可以接受第二个参数 callback()

        // this.setState({count:count+1},()=>{
        //     // 会在调用render后调用
        //     console.log("callBack")
        // })

        // setState 也可以通过函数的方式调用
        this.setState((state,props)=>{
            console.log(state,props)
            // 可接受两个蚕食 state 和 props
            return {
                count:state.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>当前的值为 {this.state.count}</h1>
                <button onClick={this.add}> + 1 </button>
            </div>
        )
    }
}
