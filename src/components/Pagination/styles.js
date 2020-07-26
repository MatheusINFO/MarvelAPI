import styled from 'styled-components';
import {darken} from 'polished';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px 0;
    bottom: 0;

    button{
        background: #ed1d24;
        padding: 5px;
        width: 50px;
        border-radius: 4px;

        :hover{
            background: ${darken(0.05, "#ed1d24")};
        }
    }

    input{
        margin: 0 15px;
        padding: 10px;
        width: 50px;
        text-align: center;
        font-size: 20px;
        color: #333;
        border: 1px solid #ccc;
        border-radius: 4px; 
    }
`;