import React from 'react';
import ReactDOM from 'react-dom'
import App from './route/App';
import {RecoilRoot} from 'recoil';
import 'styles/Font.css';

declare global {
  interface Window {
    kakao: any;
  }
}


ReactDOM.render(  
  <React.StrictMode>
    <RecoilRoot >
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitalsreportWebVitals(