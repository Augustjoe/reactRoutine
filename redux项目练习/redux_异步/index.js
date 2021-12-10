import React from "react"
import reactDom from "react-dom"
import App from "./App"
import store from "./redux/store"

reactDom.render(<App></App>,document.getElementById('root'))

// 在这里监听可一劳永逸，不必担心计算问题，有diff算法
store.subscribe(()=>{
    reactDom.render(<App></App>,document.getElementById('root'))
})