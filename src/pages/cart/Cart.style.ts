import styled from "styled-components";

interface ICartContainer {
  isVisible: boolean;
}

export const CartContainer = styled.div<ICartContainer>`
  position: relative;
  ${({ isVisible }) => {
    if (isVisible) {
      return "display: flex;";
    }
    return "display: none;";
  }}
  background-color: #000000;
  width: 300px;
  height: 300px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

export const ClosButton = styled.div`
  position: absolute;
  display: flex;
  text-align: center;
  justify-content: center;
  top: -9px;
  right: -9px;
  border-radius: 50%;
  background-color: white;
  color: black;
  width: 18px;
  height: 18px;
  font-size: 12px;
  cursor: pointer;
`;
