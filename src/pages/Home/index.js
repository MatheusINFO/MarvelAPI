import React, {useState} from 'react';

import {Container} from './styles';

import Spinner from '../../components/Spinner';
import SearchBar from '../../components/SearchBar';
import Pagination from '../../components/Pagination';
import ListHero from '../../components/ListHero';
import CardHero from '../../components/ListHero/CardHero';

import {useHero} from '../../hooks/useHero';

const Home = () => {
    const [{heros, loading}, loadHero] = useHero();

    return(
        <Container>
            <SearchBar/>

            {loading ? <Spinner/> : (
                <ListHero>
                    {heros.map((hero) => (
                        <CardHero 
                            key={hero.id}
                            id={hero.id}
                            name={hero.name}
                            thumbnail={hero.thumbnail}
                        />
                    ))}
                </ListHero>
            )}
            
            <Pagination/>
        </Container>
    )
};

export default Home;

/*
``
*/