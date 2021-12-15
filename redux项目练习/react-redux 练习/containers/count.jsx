// 引入UI组件
import CountUI from "./../components/count"

// 引入用于链接UI组件和redux的connect
import { connect } from "react-redux"

import { createIncrementAction, createdecrementAction, createdecrementAsyncAction } from "../components/redux_action"

/* 
    mapStateToProps 函数返回的是一个对象
    返回的对象中key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
    mapStateToProps用于传递状态
*/
function mapStateToProps(store) {
    return { store }
}
/* 
    MapDispatchToProps 函数返回的是一个对象
    返回的对象中key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
    MapDispatchToProps 用于传递操作对象的方法
*/
function MapDispatchToProps(dispatch) {
    return {
        "increment": data => dispatch(createIncrementAction(data)),
        "decrement": data => dispatch(createdecrementAction(data)),
        "AsyncAction": (data, time) => dispatch(createdecrementAsyncAction(data, time)),
    }
}

export default connect(mapStateToProps, MapDispatchToProps)(CountUI)

