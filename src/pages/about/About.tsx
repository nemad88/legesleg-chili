import { useRef } from "react";
import { AboutContainer } from "./About.style";
import { SectionTitle } from "../../utils/Common.style";
import { useSetActualPage } from "../../hooks/useSetActualPage";

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  useSetActualPage(aboutRef, "about");

  return (
    <AboutContainer ref={aboutRef} id="about">
      <SectionTitle>Rólunk</SectionTitle>
    </AboutContainer>
  );
};

export default About;
