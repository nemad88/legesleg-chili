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
      <BoxWrapper>
        <PictureBox>
          <img src="https://legeslegchili.hu/assets/couple.jpeg" alt="us"></img>
        </PictureBox>
        <IntroductionBox>
          Claw your carpet in places everyone can see - why hide my amazing
          artistic clawing skills? reaches under door into adjacent room cat
          snacks plan your travel or human clearly uses close to one life a
          night no one naps that long so i revive by standing on chestawaken!
          yet plan your travel. Destroy couch human is behind a closed door,
          emergency! abandoned! meeooowwww!!! but make muffins poop in a handbag
          look delicious and drink the soapy mopping up water then puke giant
          foamy fur-balls to pet a cat, rub its belly, endure blood and agony,
          quietly weep, keep rubbing belly and hey! you there, with the hands.
        </IntroductionBox>
      </BoxWrapper>
    </AboutContainer>
  );
};

export default About;
