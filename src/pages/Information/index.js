import React from 'react';
import {Link} from 'react-router-dom';

import {Container} from './styles';

import LogoMarvel from '../../assets/marvel-logo2.png';


const Information = () => {
    return(
        <Container>
            <img src={LogoMarvel} alt="Logo Marvel"/>

            <p>
                Olá galera, essa aplicação foi feita usando a API da Marvel para estudo do react, o código 
                está disponível no meu GitHub @MatheusINFO, espero que gostem!
            </p>

            <button>
                <Link to="/home">Continuar</Link>
            </button>
        </Container>
    )
}

export default Information;
