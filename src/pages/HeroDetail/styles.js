import styled from 'styled-components';
import {darken} from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px auto;

    a{
        margin: 25px 0;
        padding: 10px;
        background: #ed1d24;
        border-radius: 4px;
        color: #fff;
        text-decoration: bold;

        :hover{
            background: ${darken(0.1, "#ed1d24")};
        }
    }
`;

export const Title = styled.strong`
    color: #fff;
    font-size: 40px;
    text-shadow: #ed1d24 2px -2px, #ed1d24 -2px 2px, #ed1d24 2px 2px, #ed1d24 -2px -2px;
    padding: 30px;
`;

export const SeriesText = styled.p`
    color: #333;
    font-weight: bold;
    padding: 2px;
`;

export const WrapperHero = styled.div`
    display: flex;
    background: #ed1d24;
    width: 800px;
    border-radius: 8px;
    padding: 0 15px 0 0;

    img{
        height: 300px;
        border-radius: 8px;
    }

   div{
        margin-top: 20px;
        margin-left: 25px;
        text-align: center;

        h1{
            margin-top: 15px;
            color: #fff;
        }

        p{
            text-align: justify;
            margin-top: 25px;
            color: #fff;
        }
   }

   @media(max-width: 600px){
       flex-direction: column;
        width: 350px;

        img{
            height: 250px;
            width: 250px;
            margin: 0 auto;
        }
    }
`;

export const WrapperComic = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 50px;

    @media(max-width: 1650px){
        grid-template-columns: repeat(4, 1fr);
    }

    @media(max-width: 1300px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: 1000px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 800px){
        grid-template-columns: repeat(1, 1fr);
    }

`;

export const ComicDetails = styled.div`
    width: 250px;

    div{
        background: #ed1d24;
        height: 380px;
        border-radius: 8px 8px 4px 4px;

        img{
            cursor: pointer;
            height: 320px;
            width: 250px;
            border-radius: 4px;
            margin-bottom: 3px;

            :hover{
                opacity: 0.9;
            }
        }

        strong{
            display: block;
            width: 200px;
            text-align: justify;
            font-size: 14px;
            color: #fff;
            margin: 0 auto;
        }
    }
`;