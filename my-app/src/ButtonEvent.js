import React from "react";


class ButtonEvent extends React.Component {
    constructor(props) {
        super(props)        
    }

    click() {
        console.log("Opa! Você clicou no botão!")
    }

    render() {
        return <>
            <button onClick={this.click} >Clique aqui para imprimir uma mensagem no console do browser.</button>
        </>
    }
}
export default ButtonEvent;