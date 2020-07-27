import React from 'react';

import Spinner from '../../components/Spinner';

import {useDetail} from '../../hooks/useDetail';

const HeroDetail = () => {
    const [{hero, comics, loading}] = useDetail();

    return(
        <>
            {!loading && (
                <>
                    <img src={hero.thumbnail.path + '.' + hero.thumbnail.extension} alt="Avatar"/>
                    <h1>Nome: {hero.name}</h1>
                    <p>Descrição: {hero.description}</p>

                    <strong>Séries:</strong>
                    {hero.series.items.map((item, id) => (
                        <p key={id}>{item.name}</p>
                    ))}

                    <strong>Eventos:</strong>
                    {hero.events.items.map((item, id) => (
                        <p key={id}>{item.name}</p>
                    ))}

                    <strong>Quadrinhos</strong>
                    {comics.map((comic, id) => (
                        <div key={id}>
                            {comic.thumbnail.path + '.' + comic.thumbnail.extension !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' &&
                                <>
                                    <p>{comic.title}</p>
                                    <img src={comic.thumbnail.path + '.' + comic.thumbnail.extension} alt="Comic"/>
                                </>
                            }
                        </div>
                    ))}
                </>
            )}
        </>
    )
}

export default HeroDetail;