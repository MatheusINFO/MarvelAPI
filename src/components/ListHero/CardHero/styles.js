import styled from 'styled-components';

export const Container = styled.li`
    list-style: none;
    margin: 10px;
    height: 370px;
    width: 350px;
    text-align: center;
    padding: 10px 15px;
    border: 1px solid #000;
    background-image: url(${props => props.image});
    background-position: cover cover;
    background-size: 450px;
    background-repeat: no-repeat;
`;

export const Content = styled.div`
    height: 340px;
    width: 260px;
    background: whitesmoke;
    margin: 0 auto;
    border-radius: 2px;

    strong{
        color: #000;
    }
`;

export const WrapperHero = styled.div`
    padding: 5px 10px 0 10px;
    width: 20px;

    img{
        border-radius: 4px;
        height: 280px;
        width: 240px;
        transition: all 0.3s;

        :hover{
            transform: scale(0.9);
        }
    }
`;


