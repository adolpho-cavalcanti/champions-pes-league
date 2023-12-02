import styled from 'styled-components';

export const ContainerPlayer = styled.main`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    @media(max-width: 600px) {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`;

export const PlayerStyles = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    background: #000;
    height: 350px;
    width: 100%;
    position: relative;
    box-shadow: 0 3px 6px #000, 0 3px 6px #000;
    border-bottom-left-radius: 25px;
    border-top-right-radius: 25px;
    @media(max-width: 600px) {
        flex-direction: column;
        height: 100%;
    }
`;
export const CircleWrapperPlayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
  @media(max-width: 600px) {
    display: none;
  }
`;

export const CirclePlayer = styled.div`
  position: absolute;
  width: 350px;
  height: 280px;
  top: -4.2em;
  right: -10em;
  z-index: 5;
  background-color: yellow;
  border-radius: 50%;
`;
export const ImgPlayer = styled.div`
    width: 30%;
    height: 100%;
    background: #000;
    border-bottom-left-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 70%;
        height: 80%;
    }
    @media(max-width: 600px) {
        width: 100%;
        height: 220px;
    }
`;
export const ContentPlayer = styled.div`
    width: 70%;
    padding: 1rem;
    @media(max-width: 600px) {
        width: 100%;
        padding: 0;
    }
`;
export const ButtonActionsPlayer = styled.div`
    display: flex;
    justify-content: center;
    @media(max-width: 600px) {
        display: flex;
        justify-content: space-between;
        margin: 10px 5px;
    }
`;
export const ButtonTrophy = styled.button`
    cursor: pointer;
    padding: 10px 20px;
    background: yellow;
    color:  #000;
    font-weight: bold;
    border-radius: 30px;
    transition: 0.5s;
    z-index: 99;
    :hover {
        box-shadow: 0 3px 6px #000, 0 3px 6px #000,
        0 3px 6px #000, 0 3px 6px #000;
    }
`;
export const ButtonBackHome = styled.button`
    right: 0;
    position: absolute;
    margin-right: 20px;
    cursor: pointer;
    padding: 10px 20px;
    background: red;
    color:  #fff;
    font-weight: bold;
    border: 4px solid red;
    border-radius: 10px;
    transition: 0.5s;
    z-index: 99;
    :hover {
        border: 4px solid red;
        box-shadow: 0 3px 6px rgb(243, 86, 86), 0 3px 6px rgb(243, 86, 86),
        0 3px 6px rgb(243, 86, 86), 0 3px 6px rgb(243, 86, 86);
        transition: 0.5s;
    }
    @media(max-width: 600px) {
        padding: 5px 10px;
        margin-right: 5px;
    }
`;
export const DataPlayer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    span {
        margin: 5px;
        padding: 5px;
        color: #FFF;
        z-index: 99;
    }
    span:hover {
        background: yellow;
        color: #000;
        transition: 0.5s;
        border-radius: 5px;
    }
    div {
        margin: 5px;
        padding: 5px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        width: 100%;
        img {
            width: 25px;
            height: 25px;
            border-radius: 50%;
        }
        span:last-child {
            border: none;
            width: 100%;
        }
    }
    div:hover {
        background: #000;
        transition: 0.5s;
    }
`;
