import { useRef } from "react";
import {
  AboutContainer,
  // ContentWrapper,
  BoxWrapper,
  PictureBox,
  IntroductionBox,
} from "./About.style";
import { SectionTitle } from "../../utils/Common.style";
import { useSetActualPage } from "../../hooks/useSetActualPage";

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  useSetActualPage(aboutRef, "about");

  return (
    <AboutContainer ref={aboutRef} id="about">
      <SectionTitle>Rólunk</SectionTitle>
      {/* <ContentWrapper> */}
      <BoxWrapper>
        <PictureBox>Pic</PictureBox>
        <IntroductionBox>Int</IntroductionBox>
      </BoxWrapper>
      {/* </ContentWrapper> */}
    </AboutContainer>
  );
};

export default About;
