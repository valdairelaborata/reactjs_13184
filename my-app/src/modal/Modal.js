
import React from "react";
import './Modal.css'


const Modal = ({ ehVisivel, aoConfirmar, aoCancelar, mensagem }) => {

    if (!ehVisivel)
        return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Mensagem de confirmação.</h2>
                <p>
                    <strong>{mensagem}</strong>
                </p>
                <button onClick={aoConfirmar} >Confirmar</button>
                <button onClick={aoCancelar} >Cancelar</button>
            </div>
        </div>
    );
}

export default Modal;