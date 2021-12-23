import styled from "styled-components";

export const CartContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: #ffffff;
  width: 80vw;
  height: 80vh;
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

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 16px;

  div {
    padding: 8px;
    border: 1px solid black;
  }
`;
