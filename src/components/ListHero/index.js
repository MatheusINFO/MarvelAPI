import React from 'react';
import PropTypes from 'prop-types';

import {Container} from './styles';

const ListHero = (props) => {
    return(
        <Container>
            {props.children}
        </Container>
    )
}

ListHero.propTypes = {
    children: PropTypes.array
}


export default ListHero;