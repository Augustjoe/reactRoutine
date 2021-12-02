import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

export default class NavLinks extends Component {
    render() {
        console.log(this.props)
        return (
            // 可通过 {...this.props} 这种方式来将获取到的值遍历进去
            <div>
                <NavLink className="list-group-item" {...this.props}></NavLink>
            </div>
        )
    }
}
