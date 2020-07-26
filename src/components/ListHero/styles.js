import styled from 'styled-components';

export const Container = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 25px;
    margin-top: 50px;


    @media(max-width: 1650px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: 1300px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 840px){
        grid-template-columns: repeat(1, 1fr);
    }
`;