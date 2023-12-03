import styled from "styled-components";

export const HeaderLogo = styled.header`
  width: 100%;
  height: 70px;
  margin: 1rem;
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 0 20px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
  margin: 0 10px;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;
