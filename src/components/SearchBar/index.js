import React from 'react';
import {FaSearch} from 'react-icons/fa';

import {Form} from './styles';

const SearchBar = () => {
    return(
        <Form>
            <input type="text" placeholder="Digite o nome do héroi"/>
            
            <button type="submit">
                <FaSearch size={20} color="#fff"/>
            </button>
        </Form>
    )
}

export default SearchBar;