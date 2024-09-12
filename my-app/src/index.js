import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ContadorFunc from './ContadorFunc'


// import ButtonEvent from './ButtonEvent'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <ContadorFunc minimo={0} maximo={3}></ContadorFunc>
  </div>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
