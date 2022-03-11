import styled from "styled-components";
import { fullPage } from "../../utils/Common.style";

export const AboutContainer = styled.div`
  background-color: #ffffff;
  ${fullPage}
  display: flex;
  flex-direction: column;
`;

// export const ContentWrapper = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   background-color: brown;
// `;

export const BoxWrapper = styled.div`
  display: flex;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: gray;
`;

export const PictureBox = styled.div`
  /* position: relative; */
  width: 450px;
  height: 450px;
  background-color: red;
  transform: translate(50px);
`;

export const IntroductionBox = styled.div`
  /* position: relative; */
  width: 450px;
  height: 450px;
  background-color: purple;
  transform: translate(-50px, 250px);
`;
