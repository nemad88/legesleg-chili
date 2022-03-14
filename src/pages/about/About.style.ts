import styled from "styled-components";
import { fullPage } from "../../utils/Common.style";

export const AboutContainer = styled.div`
  background-color: #ffffff;
  ${fullPage}
  display: flex;
  flex-direction: column;
`;

export const BoxWrapper = styled.div`
  display: flex;
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 48px;
`;

export const PictureBox = styled.div`
  width: 720px;
  height: 520px;
  background-color: red;
  transform: translate(50px);

  img {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
  }
`;

export const IntroductionBox = styled.div`
  width: 720px;
  height: 520px;
  background-color: #fffeee;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  transform: translate(-50px, 50px);
`;
