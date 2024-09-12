
import React from "react"


class Contador extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nr_clicks: 0
        }

        this.incrementar = this.incrementar.bind(this)
        this.decrementar = this.decrementar.bind(this)
    }

    incrementar() {
        this.setState({ nr_clicks: this.state.nr_clicks + 1 })
    }

    decrementar() {
        this.setState({ nr_clicks: this.state.nr_clicks - 1 })
    }

    render() {

        const { nr_clicks } = this.state;
        const { maximo, minimo } = this.props;

        return <>
            <button onClick={this.incrementar} disabled={nr_clicks >= maximo}>Incrementar</button>
            <br></br>
            <button onClick={this.decrementar} disabled={nr_clicks <= minimo}>Decrementar</button>
            <br></br>
            <label>Você clicou {nr_clicks} vezes!</label>
        </>
    }
}

export default Contador