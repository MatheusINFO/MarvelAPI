import styled from 'styled-components';

export const Container = styled.div`
    margin: 200px 0;

    strong{
        color: #ed1d24;
    }
`;

export const StyledSpinner = styled.div`
    border: 5px solid #f3f3f3;
    border-top: 5px solid #ed1d24;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: spin 0.8s linear infinite;
    margin: 20px auto;

    @keyframes spin{
        0%{
            transform: rotate(0deg);
        }

        100%{
            transform: rotate(360deg);
        }
    }
`;