import React, { Component } from 'react'
import PubSub from "pubsub-js"

export default class List extends Component {

  state = {
    users: [],
    loading:false,
    isFirst:true,
    err:""
  }

  componentDidMount(){
    // 订阅消息 用于不同组件通信
    this.token =  PubSub.subscribe("Search",(msg,data)=>{
      console.log(data)
      this.setState(data)
    })
  }

  componentWillUnmount(){
    // 当组件注销后取消订阅
    PubSub.unsubscribe(this.token)
  }

  render() {
    const {loading,isFirst,users,err} = this.state
    
    return (
      <div className="row">
        {
          isFirst ? <h2>欢迎使用</h2> :
          loading ? <h2>正在加载请稍后</h2> :
          err ? <h2> 出现错误 ： {err}</h2> :
          users.map(item => {
            return (
              <div key={item.id} className="card">
                <a href={item.html_url} target="_blank" rel="noreferrer">
                  <img alt="head portrait" src={item.avatar_url} style={{ width: '100px' }} />
                </a>
                <p className="card-text">{item.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
