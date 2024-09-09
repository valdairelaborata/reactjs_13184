import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


function Ola(props) {
  return <h1>Olá {props.nome}</h1>
}

function Mensagem() {
  return <h2>Seja bem - vindo!!</h2>
}

class Saudacao extends React.Component {
  render() {
    return <h1>Olá {this.props.identificacao}</h1>
  }
}

function Lista(props) {
  return <>
    <h1>{props.titulo}</h1>
    <hr></hr>
    <ol>
      <li>Itens - 01</li>
      <li>Itens - 02</li>
      <li>Itens - 03</li>
      <li>Itens - 04</li>
    </ol>
  </>
}

class Perfil extends React.Component {
  render() {
    return <>
      <hr></hr>
      <h1>Perfil</h1>
      <h2>Nome</h2>
      <h3>Valdair</h3>
      <h2>Area de interesse</h2>
      <h3>Pecaria e xpto</h3>
      <h2>Hobbies</h2>
      <h3>Andar de bike</h3>
    </>
  }
}


root.render(
  <div>
    <Lista titulo="Lista de itens"></Lista>
    <Perfil></Perfil>
  </div>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
