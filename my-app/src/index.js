import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Opa from './Opa'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const nome = "Valdair"

function tick() {
  const element = (
    <div>
      <h1>Olá, {nome}</h1>
      <h2>Hora agora: {new Date().toLocaleTimeString()}</h2>
    </div>
  );

  root.render(element)
}



setInterval(tick, 1000);



// root.render(
//   <React.StrictMode>
//     <Opa />
//     <App />   
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
