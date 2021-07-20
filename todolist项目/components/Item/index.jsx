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

    handleCheck = (item)=>{
        return (event)=>{
            console.log(event.target.checked,item)
            this.props.changeDone({
                ...item,
                done:event.target.checked,
            })
        }
    }

    delList = (id)=>{
        return ()=>{
            if(window.confirm("是否删除此任务")){
                this.props.deleteList(id)
            }
        }
    }

    render() {
        const {name,done,id} = this.props.item 
        return (
            <div>
                <li style={{background:this.state.mouse?'#ddd':'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)} >
                    <label>
                        <input type="checkbox" checked={done} onChange={this.handleCheck(this.props.item )}/>
                        <span>{name}</span>
                    </label>
                    <button onClick={this.delList(id)} className="btn btn-danger" style={{ display :this.state.mouse? "" : 'none' }}>删除</button>
                </li>
            </div>
        )
    }
}
