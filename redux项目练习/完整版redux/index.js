import React from "react"
import reactDom from "react-dom"
import App from "./App"
import store from "./redux/store"
import {Provider} from "react-redux"

// Provider 可以自动将store传给app下的所有子组件
reactDom.render(
    <Provider store={store}>
        <App></App>
    </Provider>
,document.getElementById('root'))

// 在这里监听可一劳永逸，不必担心计算问题，有diff算法 
// 用react-redux 可不用 
// store.subscribe(()=>{
//     reactDom.render(<App></App>,document.getElementById('root'))
// }) 