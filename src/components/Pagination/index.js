import React from 'react';
import {TiArrowRightOutline, TiArrowLeftOutline} from 'react-icons/ti';

import {Container} from './styles';

const Pagination = (props) => {
    return(
        <Container>
            <button onClick={props.prev}>
                <TiArrowLeftOutline size={30} color="#fff"/>
            </button>

            <input type="text" readOnly value={props.page}/>

            <button onClick={props.next}>
                <TiArrowRightOutline size={30} color="#fff"/>
            </button>
        </Container>
    )
}

export default Pagination;