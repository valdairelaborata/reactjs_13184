
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
                <button className="modal-button-confirm" onClick={aoConfirmar} >Confirmar</button>
                <button className="modal-button-cancel" onClick={aoCancelar} >Cancelar</button>
            </div>
        </div>
    );
}

export default Modal;