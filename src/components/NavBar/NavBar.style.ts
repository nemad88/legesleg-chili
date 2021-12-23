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
  color: wheat;
  z-index: 99;
  img {
    margin: 12px;
  }
`;

export const InCart = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  color: wheat;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  background-color: black;
  padding: 16px;
  width: 125px;
`;
