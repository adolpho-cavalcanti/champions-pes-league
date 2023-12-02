import styled from "styled-components";
import { motion } from "framer-motion";


export const CardContainer = styled(motion.div)`
  width: 285px;
  height: 420px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #000;
  color: #fff;
  position: relative;
  cursor: grab;
  margin: 20px;
`;

export const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const Circle = styled.div`
  position: absolute;
  width: 350px;
  height: 280px;
  top: -4.2em;
  right: -10em;
  z-index: 5;
  background-color: yellow;
  border-radius: 50%;
`;

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  padding: 0 1em;
`;

export const ShoesWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Shoes = styled(motion.div)`
  width: auto;
  height: 190px;
  z-index: 99;
  user-select: none;
  margin-top: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: auto;
    height: 100%;
    user-select: none;
  }
`;