import styled from 'styled-components';

export const Page = styled.div`
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const BarraDePesquisa = styled.div`
    width: 100%;
    height: 50px;
    margin: 1rem;
    display: flex;
    justify-content:center;
    align-items:center;
    input{
        width: 90%;
        outline: none;
        border: 10px solid #000;
        border-radius: 10px;
        padding: 10px;
    }
`;

export const Container = styled.main`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;