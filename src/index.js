import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter ,HashRouter} from 'react-router-dom';
import App from './components/routeApp/route-app';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // 浏览器路由
  // <BrowserRouter>
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>
  // </BrowserRouter>,
  
  // hash路由
  <HashRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>,
  document.getElementById('root')
);

reportWebVitals();
