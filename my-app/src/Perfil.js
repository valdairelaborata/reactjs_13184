import React from 'react';

class Perfil extends React.Component {
  render() {
    return <>
      <hr></hr>
      <h1>{this.props.perfil}</h1>
      <h2>Nome: {this.props.nome}</h2>
      <h2>Area de interesse: {this.props.area}</h2>     
      <h2>Hobbies: {this.props.hobbies}</h2>
    </>
  }
}

export default Perfil