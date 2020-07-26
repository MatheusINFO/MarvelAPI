import React from 'react';

import {Container, StyledSpinner} from './styles';

const Spinner = () => {
    return(
        <Container>
            <StyledSpinner/>
            <strong>Carregando...</strong>
        </Container>
    )
}

export default Spinner;