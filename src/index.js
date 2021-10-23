import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/commentApp/comment-app';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// 检测性能指标
reportWebVitals(console.log);
