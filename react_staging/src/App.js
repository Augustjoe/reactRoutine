import React from "react"
import "./app.css"
import { Button } from 'antd';
import {
  WechatOutlined
} from '@ant-design/icons';


const { Component } = React

export default class App extends Component {

  render() {
    return (
     <div>
       app ...
       <Button type="primary">Primary Button</Button>
       <WechatOutlined />
     </div>
    )
  }
}


