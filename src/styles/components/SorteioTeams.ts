import styled from "styled-components";

export const CardSorteio = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #F2F2F2;
  color: #000;
  position: relative;
  cursor: grab;
  margin: 20px 0;
  padding: 20px;
`;

export const TableSorteio = styled.table`
  margin: 20px 0;
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

export const TdSorteio = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

export const ThSorteio = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

export const TrSorteio = styled.tr`
  background-color: '#dddddd';
`;
