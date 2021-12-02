// 引入react核心库
import React from 'react';
// 引入react渲染核心库
import ReactDOM from 'react-dom';
// 

import App from './App';

//  React.StrictMode 在app外侧包裹 用于检查App 内代码写的是否合理
// 渲染 app
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

