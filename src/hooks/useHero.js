import {useState, useEffect} from 'react';
import axios from 'axios';

import {timeStamp, apiKey, md5, base_url} from '../services/config';

export const useHero = () => {
    const [heros, setHeros] = useState([]);
    const [loading, setLoad] = useState(true);
    const [offSet, setOffSet] = useState(0);
    const [page, setPage] = useState(1);

    const loadHero = async url => {
        const newUrl = url + `ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`;
        
        try{
            const {data: listHeros} = await axios.get(newUrl);

            setHeros(listHeros.data.results);
            setLoad(false);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        async function load(){
            const newUrl = base_url + `offset=${offSet}&ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`;

            try{
                const {data: listHeros} = await axios.get(newUrl);
    
                setHeros(listHeros.data.results);
                setLoad(false);
            }catch(error){
                console.log(error);
            }
        }

        load();
    }, [offSet]);

    // Switch pagination
    const handlePrevClick = () => {
        var newPage = page - 1;
        var newOffSet = offSet - 8;

        if(newPage <= 1){
            newPage = 1;
        }

        if(newOffSet <= 0){
            newOffSet = 0;
        }

        setPage(newPage);
        setOffSet(newOffSet);
    }

    const handleNextClick = () => {
        const newPage = page + 1;
        const newOffSet = offSet + 8;

        setPage(newPage);
        setOffSet(newOffSet);
    }

    return [{heros, loading, offSet, page}, loadHero, handleNextClick, handlePrevClick];
}