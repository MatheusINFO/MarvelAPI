import {useState, useEffect} from 'react';
import axios from 'axios';

import {timeStamp, apiKey, md5} from '../services/config';

export const useDetail = () => {
    const [hero, setHero] = useState({});
    const [comics, setComics] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const detailHero = async () => {
        const oneCharacter = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/1011334?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`);
        const comics = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/1011334/comics?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`);

        setHero(oneCharacter.data.data.results[0]);
        setComics(comics.data.data.results);

        setLoading(false);
    }

    useEffect(() => {
        detailHero();
    }, []);

    return [{hero, comics, loading}];
}