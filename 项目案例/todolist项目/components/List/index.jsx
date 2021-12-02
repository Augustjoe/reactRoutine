import React, { Component } from 'react'
import PropTypes from "prop-types"
import Item from "../Item"

export default class List extends Component {

    static propTypes = {
        stuList:PropTypes.array.isRequired
    }

    render() {
        const {stuList} = this.props
        return (
            <div>
                <ul className="todo-main">
                    {
                        stuList.map(item=>{
                            return  <Item key={item.id} item={item} changeDone={this.props.changeDone} deleteList={this.props.deleteList}></Item>
                        })
                    }
                   
                </ul>
            </div>
        )
    }
}
