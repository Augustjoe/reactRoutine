// 引入react核心库
import React from 'react';
// 引入react渲染核心库
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom"
// 

import App from './App';

//  将BrowserRouter包裹在App外侧则所有的路由都在一个路由器当中
// react的路由使用时需要将所有的路由器包裹在一个路由器中
// 渲染 app
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

