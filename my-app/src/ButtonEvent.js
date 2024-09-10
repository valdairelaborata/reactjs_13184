import React from "react";


class ButtonEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            nr_clicks: 2
        };
    };

    click() {
        this.setState({ nr_clicks: 1 })
    }

    render() {
        return <>
            <p>
                <button onClick={this.click} >Clique aqui para imprimir uma mensagem no console do browser.</button>
                <br></br>
                <label>Você clicou {this.state.nr_clicks} x no botão</label>
            </p>
        </>
    }
}
export default ButtonEvent;