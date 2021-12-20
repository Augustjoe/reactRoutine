// 引入创建redux的方法
import { createStore,applyMiddleware } from 'redux'

// 引入redux-thunk 用于支持异步action
import thunk from "redux-thunk"

import reducers from "./reducers/index"

import { composeWithDevTools } from "redux-devtools-extension"

// 汇总所有的reducer变为一个总的reducer

export default  createStore(reducers,composeWithDevTools(applyMiddleware(thunk))) 
