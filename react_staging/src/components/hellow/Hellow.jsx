import React,{Component} from "react"

// 当css文件名中有modules时，可用一个属性值接住样式
import hellow from "./index.modules.css"

class Hellow extends Component {
 render(){
     return (
         <div>
             <h1 className={hellow.hellow}>hellow word</h1>
         </div>
     )
 }
}

export default Hellow