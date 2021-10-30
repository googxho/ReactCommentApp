import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import reportWebVitals from './reportWebVitals';
import store from'./components/redux/store'

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// 初始化渲染
render()
// 注册(订阅)监听, 一旦状态发生改变, 自动重新渲染
store.subscribe(render)


reportWebVitals();
