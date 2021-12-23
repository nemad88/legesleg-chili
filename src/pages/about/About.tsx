import { useRef, useContext } from "react";
import { AboutContainer } from "./About.style";
import { SectionTitle } from "../../utils/Common.style";
import { useSetActualPage } from "../../hooks/useSetActualPage";
import { Context as ActualPageContext } from "../../context/ActualPageContext";

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const { setActualPage } = useContext(ActualPageContext);

  useSetActualPage(aboutRef, "about", setActualPage);

  return (
    <AboutContainer ref={aboutRef} id="about">
      <SectionTitle>Rólunk</SectionTitle>
    </AboutContainer>
  );
};

export default About;
