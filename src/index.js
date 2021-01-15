import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Add css files
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'; // 5.x

// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';

let seg = 0;
let seg1 = 0;
let min = 0;
let min1 = 0;
let hour = 0;
let hour1 = 0;

setInterval(() => {
  seg++

  ReactDOM.render(
    <React.StrictMode>
      <App num1={seg} num2={seg1} num3={min} num4={min1} num5={hour} num6={hour1} />
    </React.StrictMode>,
    document.getElementById('root')
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();

  if (seg == 9) {
    seg1++;
    seg = 0;
    ;
  }

  if (seg1 == 6) {
    min++;
    seg1 = 0
  }

  if (min == 10) {
    min1++;
    min = 0;
  }

  if (min1 == 6) {
    hour++;
    min1 = 0;
  }

  if (hour == 9) {
    hour1++;
    hour = 0;
  }

}, 100);
