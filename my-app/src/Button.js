

function Botao(props) {

    var nr_clicks = 1;

    const click = () => {

        nr_clicks = nr_clicks + 1;
        console.log(nr_clicks);
    }

    return <>
        <button onClick={click}>{props.label}</button>
        <label>Você clicou {nr_clicks} x.</label>
    </>
}

export default Botao;