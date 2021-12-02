import React, { Component } from 'react'
import {Route,Link} from 'react-router-dom'
import Detail from './detail'

export default class message extends Component {

    state = {
        message:[
            {id:1,title:"message1",content:"message01"},
            {id:2,title:"message2",content:"message02"},
            {id:3,title:"message3",content:"message03"},
        ]
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
                                <Link to={`/home/homemessage/detail?id=${ele.id}&title=${ele.content}`}>{ele.title}</Link>
                            </li>
                        )
                    })
                }
                {/* 路由接受search参数 */}
                <Route path='/home/homemessage/detail' component={Detail}/>

                {/* 路由接受参数 */}
                {/* <Route path='/home/homemessage/detail/:id/:title' component={Detail}/> */}
                
            </div>
        )
    }
}
