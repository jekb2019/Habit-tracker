import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';

// ReactDOM 라이브러리를 사용하여 root아이디를 갖고있는 테그를 찾아 <App> 컴포넌트를 연결시켜준다
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); 
