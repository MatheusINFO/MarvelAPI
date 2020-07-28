import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import {FaSearch} from 'react-icons/fa';

import {Form} from './styles';

const SearchBar = (props) => {
    const [inputValue, setInputValue] = useState('');
    const timeOut = useRef(null);

    const handleSearch = (e) => {
        const {value} = e.target;

        clearTimeout(timeOut.current);

        setInputValue(value);

        timeOut.current = setTimeout(() => {
            props.callback(value);
        }, 300);
    }

    return(
        <Form onSubmit={handleSearch}>
            <input 
                type="text" 
                placeholder="Digite o nome do héroi"
                onChange={handleSearch}
                value={inputValue}
            />
            
            <button type="submit">
                <FaSearch size={20} color="#fff"/>
            </button>
        </Form>
    )
}

SearchBar.propTypes = {
    callback: PropTypes.func,
}


export default SearchBar;