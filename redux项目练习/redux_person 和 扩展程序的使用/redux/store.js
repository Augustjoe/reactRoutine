// 引入创建redux的方法
import { createStore,applyMiddleware, combineReducers } from 'redux'
// 引入为store服务的函数
import countReducer from "./reducers/count"
import personReducers from "./reducers/person"
// 引入redux-thunk 用于支持异步action
import thunk from "redux-thunk"

import { composeWithDevTools } from "redux-devtools-extension"

// 汇总所有的reducer变为一个总的reducer
const allReducer = combineReducers({
    persons:personReducers,
    count:countReducer
})


export default  createStore(allReducer,composeWithDevTools(applyMiddleware(thunk))) 
