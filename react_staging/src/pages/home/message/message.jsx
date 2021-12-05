import React, { Component } from 'react'
import {Route,Link} from 'react-router-dom'
import Detail from './detail'

export default class message extends Component {

    state = {
        message:[
            {id:'1',title:"message1",content:"message01"},
            {id:'2',title:"message2",content:"message02"},
            {id:'3',title:"message3",content:"message03"},
        ]
    }


    replaceUrl = (id,title)=>{
        // 通过search参数传值
        // this.props.history.replace(`/home/homemessage/detail?id=${id}&title=${title}`)
        
        // 通过state传值 
        this.props.history.replace(`/home/homemessage/detail`,{id,title} )


    }
    
    pushUrl = (id,title)=>{
        // 通过search参数传值
        // this.props.history.push(`/home/homemessage/detail?id=${id}&title=${title}`)
        
        // 通过state传值
        this.props.history.push(`/home/homemessage/detail`,{id,title})

    }


    render() {
        const {message} = this.state
        return (
            <div>
                {
                    message.map(ele=>{
                        return (
                            <li key={ele.id}>
                                
                                
                                {/* 通过params传递参数 */}
                                {/* <Link to={`/home/homemessage/detail/${ele.id}/${ele.title}`}>{ele.title}</Link> */}
                                
                                {/* 通过search传递参数 */}
                                {/* <Link to={`/home/homemessage/detail?id=${ele.id}&title=${ele.content}`}>{ele.title}</Link> */}
                                
                                {/* 通过state传递参数 */}
                                <Link replace={true} to={{pathname:"/home/homemessage/detail",state:{id:ele.id,title:ele.content}}}>{ele.title}</Link>
                                &nbsp; <button onClick={()=>this.pushUrl(ele.id,ele.title)}>push方式跳转</button>
                                &nbsp; <button onClick={()=>this.replaceUrl(ele.id,ele.title)}>replace方式跳转</button>
                            </li>
                        )
                    })
                }
                {/* 路由接受search参数或者接受search参数 */}
                <Route path='/home/homemessage/detail' component={Detail}/>

                {/* 路由接受参数 */}
                {/* <Route path='/home/homemessage/detail/:id/:title' component={Detail}/> */}

                <button onClick={()=>this.props.history.goBack()}>后退</button>
                <button onClick={()=>this.props.history.goForward()}>前进</button>
                
            </div>
        )
    }
}
