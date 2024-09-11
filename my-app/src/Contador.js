
import React from "react"


class Contador extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nr_clicks: 0,
            maximo: 5,
            minino: 0
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
        return <>
            <button onClick={this.incrementar} disabled={this.state.nr_clicks >= this.state.maximo}>Incrementar</button>
            <br></br>
            <button onClick={this.decrementar} disabled={this.state.nr_clicks <= this.state.minino}>Decrementar</button>
            <br></br>
            <label>Você clicou {this.state.nr_clicks} vezes!</label>
        </>
    }
}

export default Contador