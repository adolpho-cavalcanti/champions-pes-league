import styled from 'styled-components';

export const HeaderLogo = styled.header`
    width: 100%;
    height: 70px;
    margin: 1rem;
    display: flex;
    justify-content:center;
    align-items:center;
    img {
        width: 50%;
    }
    @media(max-width: 900px) {
        img {
            width: 75%;
        }
    }
    @media(max-width: 600px) {
        img {
            width: 100%;
        }
    }
`;