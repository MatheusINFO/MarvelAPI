import styled from 'styled-components';
import {lighten} from 'polished';

import ComicBook from '../../assets/comicbook.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: 150px;
    background-image: linear-gradient(to bottom, rgba(0,0,0, 0.95), rgba(237, 29, 36, 0.8)), url(${ComicBook});

    img{
        height: 220px;
        margin: 0 auto;
        animation: animatedLogo 3s ease-in;

        @media(max-width: 800px){
            width: 380px;
        }
    }

    p{
        margin: 25px auto;
        font-size: 18px;
        width: 350px;
        text-align: justify;
        color: #fff;

        @media(max-width: 800px){
            width: 320px;
        }
    }

    button{
        margin: 25px auto 0;
        text-align: center;
        border-radius: 4px;
        background: #ff2631;
        width: 105px;
        height: 50px;
        padding: 10px;

        a{
            font-weight: bolder;
            font-size: 16px;
            padding: 15px 0;
            color: #fff;
        }

        :hover{
            background: ${lighten(0.08, "#ff2631")};
        }
    }

    @keyframes animatedLogo{
        from{
            transform: translateY(100%);
        }

        to{
            transform: translateY(0%);
        }
    }
`; 