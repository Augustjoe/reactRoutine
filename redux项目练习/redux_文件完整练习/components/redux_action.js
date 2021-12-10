//  帮助组件生成action对象
import {INCREMENT,DECREMENT} from "./constant"
 
export const createIncrementAction = (data)=>({type:INCREMENT,data})

export const createdecrementAction = (data)=>({type:DECREMENT,data})
