import React from 'react';
import {Link} from 'react-router-dom';

import {Container, Title, SeriesText, WrapperHero, WrapperComic, ComicDetails} from './styles';

import Spinner from '../../components/Spinner';

import {useDetail} from '../../hooks/useDetail';

const HeroDetail = () => {
    const [{hero, comics, loading}] = useDetail();

    return(
        <Container>
            {loading ? <Spinner/> : (
                <>
                    <Link to="/home" title="voltar">voltar</Link>
                    <WrapperHero>
                        <img src={hero.thumbnail.path + '.' + hero.thumbnail.extension} alt="Avatar"/>
                        
                        <div>
                            <h1>{hero.name}</h1>
                            <p>{hero.description}</p>
                        </div>
                    </WrapperHero>

                    <Title>Séries</Title>
                    {hero.series.items.map((item, id) => (
                        <SeriesText key={id}>{item.name}</SeriesText>
                    ))}

                    <Title>Quadrinhos</Title>
                    <WrapperComic>
                        {comics.map((comic, id) => (
                            <ComicDetails key={id}>
                                <div>
                                    <img src={comic.thumbnail.path + '.' + comic.thumbnail.extension} alt="Comic"/>
                                    <strong>{comic.title}</strong>
                                </div>
                            </ComicDetails>
                        ))}
                    </WrapperComic>
                </>
            )}
        </Container>
    )
}

export default HeroDetail;