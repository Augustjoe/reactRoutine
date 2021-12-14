import React, { Component } from 'react'

// import Rstore from "../redux/store"
// import {createIncrementAction, createdecrementAction,createdecrementAsyncAction} from "./redux_action"

export default class count extends Component {

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

