
import React from "react";


class ButtonComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { nr_clicks: 2 }
    }



    click() {
        // var temp = this.state.nr_clicks;
        console.log("Aqui vamos incrementar o click")
    }

    render() {
        return <>
            <button onClick={this.click}>{this.props.label}</button>
            <label>Você clicou {this.state.nr_clicks} x.</label>
        </>
    }

}

export default ButtonComponent;