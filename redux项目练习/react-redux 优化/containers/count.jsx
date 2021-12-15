
// 引入用于链接UI组件和redux的connect
import { connect } from "react-redux"

import { createIncrementAction, createdecrementAction, createdecrementAsyncAction } from "../components/redux_action"

import React, { Component } from 'react'


// 可直接在次定义组件，用于下方使用
class CountUI extends Component {

    state = { count:0 }

    // 组件自身更新
    // componentDidMount(){
    //     Rstore.subscribe(()=>{
    //         this.setState({})
    //     })
    // }

    // 加法
    increment=()=>{
        const {value} = this.selectNumber
        this.props.increment(value*1)
        // Rstore.dispatch(createIncrementAction(value*1))
    }
    decrement=()=>{
        const {value} = this.selectNumber
        this.props.decrement(value*1)
        // Rstore.dispatch(createdecrementAction(value*1))
    }
    incrementIfOdd=()=>{
        const {value} = this.selectNumber
        // Rstore.getState() % 2 !== 0 &&  Rstore.dispatch(createIncrementAction(value*1))
        this.props.store % 2 !== 0 &&  this.props.increment(value*1)
    }
    incrementAsync=()=>{ 
        const {value} = this.selectNumber
            // createdecrementAsyncAction(value*1,500)
            this.props.AsyncAction(value*1,500)
        }

    render() {
        return (
            <div>
                <h1>当前求和为 ： {this.props.store}</h1>
                <select className="m10" ref={c=>this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment} className="m10">+</button>
                <button onClick={this.decrement} className="m10">-</button>
                <button onClick={this.incrementIfOdd} className="m10">当前求和为奇数再加</button>
                <button onClick={this.incrementAsync} className="m10">异步加</button>
            </div>
        )
    }
}


export default connect(store =>({ store }), 
// 传统的传值方式
// dispatch=>({
//     "increment": data => dispatch(createIncrementAction(data)),
//     "decrement": data => dispatch(createdecrementAction(data)),
//     "AsyncAction": (data, time) => dispatch(createdecrementAsyncAction(data, time)),
// })
// 简写方式
{
    "increment": createIncrementAction,
    "decrement": createdecrementAction,
    "AsyncAction": createdecrementAsyncAction,
}
)(CountUI)

