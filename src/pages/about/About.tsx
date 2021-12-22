import { useRef } from "react";
import { AboutContainer } from "./About.style";
import { SectionTitle } from "../../utils/Common.style";
import { useSetActualPage } from "../../hooks/useSetActualPage";
import { ISetActualPage } from "../../utils/ISetActualPage";

interface IAbout extends ISetActualPage {}

const About: React.FC<IAbout> = ({ setActualPage }) => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useSetActualPage(aboutRef, "about", setActualPage);

  return (
    <AboutContainer ref={aboutRef} id="about">
      <SectionTitle>Rólunk</SectionTitle>
    </AboutContainer>
  );
};

export default About;
