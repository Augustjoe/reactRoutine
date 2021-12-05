import React, { Component } from 'react'

// withRoute 使一般组件也可以使用 history 操作路由
import { withRouter } from "react-router-dom"

class hearder extends Component {

    render() {
        return (
            <div className="col-xs-offset-2 col-xs-8">
                <div className="page-header"><h2>React Router Demo</h2></div>
                {/* 不引入withRouter直接操作history会报错 */}
                <button onClick={() => this.props.history.goBack()}>后退</button>
                <button onClick={() => this.props.history.goForward()}>前进</button>
            </div>
        )
    }
}

// withRouter 组件会加工组件，使其变成带有Route的路由组件
export default withRouter(hearder)
