import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/app';
import reportWebVitals from './reportWebVitals';
import store from './components/redux/store'

const render = () => {
  ReactDOM.render(
    //  使用react-redux 流程
    // 一：使用react-redux 提供的Provider 组件管理App组件 
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    document.getElementById('root')
  );
}

// 初始化渲染
render()
// 注册(订阅)监听, 一旦状态发生改变, 自动重新渲染
store.subscribe(render)


reportWebVitals();
