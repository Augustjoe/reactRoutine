import React from "react" 
import axios from "axios"

const { Component } = React

export default class App extends Component {

 getStudentDate = ()=>{
   axios.get("http://localhost:3000/api1/students").then(
     reponse=>{
      console.log(reponse)
     },
     err=>{
       console.log(err)
     }
   )
 }

 getCarDate = ()=>{
   axios.get("http://localhost:3000/api2/cars").then(
     reponse=>{
      console.log(reponse)
     },
     err=>{
       console.log(err)
     }
   )
 }

  render() {
    return (
      <div >
       <button onClick={this.getStudentDate}>获取数据</button>
       <button onClick={this.getCarDate}>获取数据</button>
      </div>
    )
  }
}


