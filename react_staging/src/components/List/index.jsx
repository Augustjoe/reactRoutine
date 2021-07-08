import React, { Component } from 'react'

import Item from "../Item"

export default class List extends Component {
    render() {
        const {stuList} = this.props
        return (
            <div>
                <ul className="todo-main">
                    {
                        stuList.map(item=>{
                            return  <Item key={item.id} item={item} ></Item>
                        })
                    }
                   
                </ul>
            </div>
        )
    }
}
