import { ADD_PERSON } from "../constant"

// redux 中的 reducers 必须是一个纯函数
export default function personReducers(preState = [], action) {
    const { type, data } = action
    switch (type) {
        case ADD_PERSON:
            // 要返回一个全新的数据，底层做了浅比较，如果校验后数组地址一样，则页面不会进行刷新
            return [data, ...preState]
        default:
            return preState
    }
}
