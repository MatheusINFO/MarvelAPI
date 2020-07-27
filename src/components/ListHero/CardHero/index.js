import React from 'react';

import NoImage from '../../../assets/no_image.jpg';

import {Container, Content, WrapperHero} from './styles';

const CardHero = (props) => {
    const extension = props.thumbnail.path + '.' + props.thumbnail.extension
    const avatar = extension === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ? NoImage : extension;

    return(
        <Container image={avatar}>
            <a href={"/hero/" + props.id}>
                <Content>
                    <WrapperHero>
                        <img src={avatar} alt={props.name}/>
                    </WrapperHero>
                    <strong>{props.name}</strong>
                </Content>
            </a>
        </Container>
    )
}

export default CardHero;
