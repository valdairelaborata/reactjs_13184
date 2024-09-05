import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Opa from './Opa'
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



root.render(
  <div>
    <Ola nome="Valdair"></Ola>  
    <Saudacao identificacao="Valdair"></Saudacao>


    <Mensagem></Mensagem>
  </div>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
