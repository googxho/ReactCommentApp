import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/commentApp/comment-app';
import App1 from './components/userApp/user-app';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>,
  document.getElementById('root1')
);

// 检测性能指标
reportWebVitals(console.log);
