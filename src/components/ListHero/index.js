import React from 'react';

import {Container} from './styles';

const ListHero = (props) => {
    return(
        <Container>
            {props.children}
        </Container>
    )
}

export default ListHero;