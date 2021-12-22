import React  from 'react'
import ReactDom from "react-dom"

 function Demo() {
    // 函数式编程局限在与无法使用this

    // 在进行声明值时，state会将数据进行保存
    const [ count, setCount ] = React.useState(0)

    // useEffect 类似于监听数据的改变，如想监听特定的值，将其放入第二个数组即可
    React.useEffect(()=>{
        let time = setInterval(()=>{
            setCount(state => state + 1 )
        },1000)
        // 返回的函数就相当于注销组件前的回调
        return ()=>{
            clearInterval(time)
        }
    },[])

    function unMount(){
        ReactDom.unmountComponentAtNode(document.getElementById('root'))
    }

    function add() {
        // 也可通过对象的方式
        // setCount({count:count+1})
        
        // 跟正常state一样可以通过函数的方式处理数据
        setCount(state => state + 1 )
    }

    return (
        <div>
            <h1>当前的值为 {count}</h1>
            <button onClick={add}> + 1 </button>
            <button onClick={unMount}> 卸载组件 </button>
        </div>
    )
}

export default Demo

