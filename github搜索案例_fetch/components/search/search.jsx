import React, { Component } from 'react'
// import axios from "axios"
import PubSub from "pubsub-js"

export default class search extends Component {
    search = async () => {
        // 解构赋值的连续赋值 取出this中的searchinput中的value
        // 请求的ip要与访问地址的保持一致
        const { searchInput: { value: keysWord } } = this;
        // this.props.changeState({loading:true,isFirst:false})
        PubSub.publish("Search", { loading: true, isFirst: false })

        /*         axios.get(`http://localhost:3000/api/search/users2?q=${keysWord}`).then(
                    response => {
                        console.log(response)
                        // 发布消息 谁订阅的就向谁发布
                        PubSub.publish("Search",{loading:false,users:response.data.items})
                    //    this.props.changeState({loading:false,users:response.data.items})
                    },
                    error => {
                        PubSub.publish("Search",{err:error.message,loading:false})
                        // this.props.changeState({err:error.message,loading:false})
                    }
                ) */

        // 使用fetch来请求数据（未优化）
        /*  fetch(`http://localhost:3000/api/search/users2?q=${keysWord}`).then(
             response =>{
                 // 服务器联系成功后会走这里
                 // return的值就是下面then 中 response 的值
                 return response.json()
             },
             error=>{    
                 // 服务器联系失败 返回一个新的promise 会中断传递
                 return new Promise(()=>{})
             }
         ).then(
             response =>{
                 console.log("获取数据成功",response)
             },
             err=>{
                 console.log("获取数据失败",err)
             }
         ) */

        //  优化后版本，通过try获取错误 
        try {
            const response = await fetch(`api/search/users2?q=${keysWord}`)
            const data = await response.json()
            PubSub.publish("Search", { loading: false, users: data.items })
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }
    render() {
        return (
            <div>
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input ref={a => this.searchInput = a} type="text" placeholder="输入关键词点击搜索" />&nbsp;
                        <button onClick={this.search}>搜 索</button>
                    </div>
                </section>
            </div>
        )
    }
}
