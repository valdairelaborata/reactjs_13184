import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Lista from './Lista'
// import Perfil from './Perfil'
// import Botao from './Button';
import ButtonComponent from './ButtonComponent'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    {/* <Lista titulo="Lista de itens"></Lista>
    <Perfil perfil="Informações de perfil" nome="Valdair" area="Construção" hobbies="Pescaria"></Perfil> */}

    {/* <Botao label="Click aqui!"></Botao> */}
    <ButtonComponent label="Click aqui!"></ButtonComponent>
  </div>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
