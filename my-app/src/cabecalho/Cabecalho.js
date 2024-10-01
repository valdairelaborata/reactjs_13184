
import React from 'react'
import { Link } from 'react-router-dom';

const Cabecalho = () => {

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Login</Link>
                </li>
                <li>
                    <Link to="/produtos">Produtos</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Cabecalho;