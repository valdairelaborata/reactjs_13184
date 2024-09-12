
import React, { useState } from "react";


function ContadorFunc(props) {
    const [nr_clicks, setNr_clicks] = useState(0)

    const incrementar = () => {
        setNr_clicks(nr_clicks + 1)

    }
    const decrementar = () => {
        setNr_clicks(nr_clicks - 1)
    }

    return (
        <>
            <button onClick={incrementar} disabled={nr_clicks >= props.maximo} >Incrementar</button>
            <br></br>
            <button onClick={decrementar} disabled={nr_clicks <= props.minimo} >Decrementar</button>
            <br></br>
            <label>Você clicou {nr_clicks} vezes!</label>
        </>
    );

}

export default ContadorFunc