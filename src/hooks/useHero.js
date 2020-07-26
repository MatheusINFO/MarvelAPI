import {useState, useEffect} from 'react';
import axios from 'axios';

import {base_url} from '../services/config';

export const useHero = () => {
    const [heros, setHeros] = useState([]);
    const [loading, setLoad] = useState(true);

    const loadHero = async url => {
        try{
            const {data: listHeros} = await axios.get(url);

            setHeros(listHeros.data.results);
            setLoad(false);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        loadHero(base_url);
    }, []);

    return [{heros, loading}, loadHero];
}