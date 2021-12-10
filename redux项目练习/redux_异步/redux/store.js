// 引入创建redux的方法
import { createStore,applyMiddleware } from 'redux'
// 引入为store服务的函数
import countReducer from "./count_reducer"
// 引入redux-thunk 用于支持异步action
import thunk from "redux-thunk"

export default  createStore(countReducer,applyMiddleware(thunk)) 
