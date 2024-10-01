import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Produtos from './produto/Produtos'
import Login from './login/Login'
import Cabecalho from './cabecalho/Cabecalho'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <Router>
      <Cabecalho />
      <div>
        <Routes>
          <Route path='/' element={<Login />} ></Route>
          <Route path='/produtos' element={<Produtos />}></Route>
        </Routes>
      </div>
    </Router>
  </div>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
