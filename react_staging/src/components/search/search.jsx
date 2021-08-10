import React, { Component } from 'react'
import axios from "axios"

export default class search extends Component {
    search = ()=>{
        // 解构赋值的连续赋值 取出this中的searchinput中的value
        // 请求的ip要与访问地址的保持一致
        const {searchInput:{value : keysWord}} = this;
        axios.get(`http://192.168.1.2:3000/api/search/users2?q=${keysWord}`).then(
            response => {
                console.log(response)
            },
            error => {
                console.log(error)
            }
        )
    }
    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input ref={a => this.searchInput = a} type="text"  placeholder="输入关键词点击搜索"/>&nbsp;
                        <button onClick={this.search}>搜 索</button>
                    </div>
                </section>
            </div>
        )
    }
}
