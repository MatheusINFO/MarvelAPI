import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        border: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Courier Prime', monospace;
        background-color: whitesmoke;
        height: 100%;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }
`;

export default GlobalStyle;