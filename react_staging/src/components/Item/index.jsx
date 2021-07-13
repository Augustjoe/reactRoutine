import React, { Component } from 'react'

export default class Item extends Component {
    
    state={
        mouse:false
    }

    handleMouse = (flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }

    handleCheck = (id)=>{
        return (event)=>{
            console.log(event.target.checked)
        }
    }

    render() {
        const {name,done,id} = this.props.item 
        return (
            <div>
                <li style={{background:this.state.mouse?'#ddd':'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)} >
                    <label>
                        <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)}/>
                        <span>{name}</span>
                    </label>
                    <button  className="btn btn-danger" style={{ display :this.state.mouse? "" : 'none' }}>删除</button>
                </li>
            </div>
        )
    }
}
