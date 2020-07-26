import React from 'react';
import {TiArrowRightOutline, TiArrowLeftOutline} from 'react-icons/ti';

import {Container} from './styles';

const Pagination = () => {
    return(
        <Container>
            <button>
                <TiArrowLeftOutline size={30} color="#fff"/>
            </button>

            <input type="text" value="1"/>

            <button>
                <TiArrowRightOutline size={30} color="#fff"/>
            </button>
        </Container>
    )
}

export default Pagination;