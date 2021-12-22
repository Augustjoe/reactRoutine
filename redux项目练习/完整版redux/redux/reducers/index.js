// 文件用于汇总reducers

// 引入 combineReducers 用于汇总
import { combineReducers } from 'redux'

// 引入为store服务的函数
import count from "./count"
import persons from "./person"

export default combineReducers({
    persons,
    count
})