import styled from 'styled-components';
import {darken} from 'polished';

export const Form = styled.form`
    display: flex;
    justify-content: center;
    margin-top: 30px;

    input{
        width: 300px;
        padding: 12px;
        border: 1px solid #ccc;
        border-right: none;
        border-radius: 4px 0 4px 4px;
        color: #333;
        font-size: 15px;
    }

    button{
        margin-left: -2px;
        border-radius: 0 4px 4px 0;
        background: #ed1d24;
        width: 45px;
        border: 0;

        :hover{
            background: ${darken(0.05, "#ed1d24")};
        }
    }
`;