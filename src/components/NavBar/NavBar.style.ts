import styled from "styled-components";

export const NavBarContainer = styled.ul`
  all: unset;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  display: flex;
  color: wheat;
  list-style: none;
  text-transform: uppercase;
  justify-content: flex-end;
  width: 100%;
  z-index: 99;
  transition: all 0.3s;
  padding-top: 24px;
  font-weight: bold;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    margin-right: 12px;
    cursor: pointer;
    &:hover {
      color: white;
    }
  }
`;

export const ScrolledNavBarContainer = styled.ul`
  all: unset;
  position: fixed;
  bottom: 24px;
  right: 0;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: rgba(39, 53, 87, 0.9); */
  color: wheat;
  z-index: 99;
  img {
    margin: 12px;
  }
  /* li {
    all: unset;
    font-size: 10px;
    text-transform: uppercase;
    cursor: pointer;
    margin: 16px 0px;

    &:hover {
      color: white;
    }
  } */
`;
