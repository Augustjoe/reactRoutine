//  帮助组件生成action对象
import {INCREMENT,DECREMENT} from "./constant"

 
export const createIncrementAction = (data)=>({type:INCREMENT,data})

export const createdecrementAction = (data)=>({type:DECREMENT,data})

// 异步的调用方法，就是指action的值为函数，异步action中一般都会调用同步action
export const createdecrementAsyncAction = (data,time)=>{
    setTimeout((dispatch)=>{
        dispatch(createIncrementAction(data))
    },time)
}