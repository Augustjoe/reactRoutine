import React, { Component } from 'react'

export default class count extends Component {

    state = { count:0 }

    // 加法
    increment=()=>{
        const {value} = this.selectNumber
        const {count} = this.state
        this.setState({count:value*1 + count})
    }
    decrement=()=>{
        const {value} = this.selectNumber
        const {count} = this.state
        this.setState({count:count - value*1})
    }
    incrementIfOdd=()=>{
        const {value} = this.selectNumber
        const {count} = this.state
        count % 2 !== 0 && this.setState({count:count + value*1})
    }
    incrementAsync=()=>{
        const {value} = this.selectNumber
        const {count} = this.state
        setTimeout(()=>{
            this.setState({count:value*1 + count})
        },500)
    }

    render() {
        return (
            <div>
                <h1>当前求和为 ： {this.state.count}</h1>
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

