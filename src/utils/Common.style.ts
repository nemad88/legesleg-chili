import styled, { css } from "styled-components";

export const fullPage = css`
  padding-top: 80px;
  min-width: 100vw;
  min-height: 100vh;
`;

export const SectionTitle = styled.h2`
  font-weight: 300;
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.125em;
  text-transform: uppercase;
`;

export const BackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(2px);
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 99;
`;
