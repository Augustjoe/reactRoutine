import React, { Component } from 'react'
import { NavLink,Switch,Route,Redirect } from "react-router-dom"
import News from "./news/news.jsx"
import Message from "./message/message.jsx"
export default class home extends Component {
    render() {
        console.log(this.props)
        return (
            <div>

                <div>
                    <h3>我是Home的内容</h3>
                </div>
                <ul className="nav nav-tabs">
                    <li>
                        <NavLink className="list-group-item" to='/home/homenews'>News</NavLink>
                    </li>
                    <li>
                        <NavLink className="list-group-item" to='/home/homemessage'>message</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route path="/home/homenews" component={News}/>
                    <Route path="/home/homemessage" component={Message}/>
                </Switch>
                    <Redirect to="/home/homenews"></Redirect>
            </div>
        )
    }
}
